import * as fs from 'fs';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { Bundling } from './private/bundling';
import { findUp, getLambdaToolsDefaults } from './private/util';
import { BundlingOptions } from './types';

/**
 * Properties for a .NET Function
 */
export interface DotNetFunctionProps extends lambda.FunctionOptions {
  /**
   * The runtime environment. Only runtimes of the .NET family and provided family are supported.
   *
   * @default lambda.Runtime.DOTNET_8
   */
  readonly runtime?: lambda.Runtime;

  /**
   * Directory containing your .csproj file
   */
  readonly projectDir: string;

  /**
   * Directory containing your .sln or .slnx file
   *
   * This will be used as the source of the volume mounted in the Docker
   * container and will be the directory where it will run `dotnet build` from.
   *
   * @default - the path is found by walking up parent directories searching for
   * a `.sln` or `.slnx` file from the location of `projectDir`. If no solution file is found,
   * the `projectDir` will be used.
   */
  readonly solutionDir?: string;

  /**
   * The name of the method within your code that Lambda calls to execute your function.
   * The format includes the file name. It can also include namespaces and other qualifiers,
   * depending on the runtime. For more information,
   * see https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html.
   *
   * @default - the .csproj file is used as project name and the handler is set to the project name
   * or the handler is found reading the aws-lambda-tools-defaults.json file in the project directory.
   */
  readonly handler?: string;

  /**
   * Bundling options
   *
   * @default - use default bundling options
   */
  readonly bundling?: BundlingOptions;
}

/**
 * A .NET Lambda function
 */
export class DotNetFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props: DotNetFunctionProps) {
    const { projectDir } = props;

    // Find aws-lambda-tools-defaults.json in project directory
    const lambdaToolsDefaults = getLambdaToolsDefaults(projectDir);

    // Resolve Lambda runtime from properties, aws-lambda-tools-defaults.json or default to DOTNET_8
    let runtime = props.runtime;
    if (!runtime) {
      const toolsRuntime = lambdaToolsDefaults?.['function-runtime'] as
        | string
        | undefined;
      if (
        toolsRuntime &&
        (toolsRuntime.startsWith('dotnet') ||
          toolsRuntime.startsWith('provided'))
      ) {
        const family = toolsRuntime.startsWith('dotnet')
          ? lambda.RuntimeFamily.DOTNET_CORE
          : lambda.RuntimeFamily.OTHER;
        runtime = new lambda.Runtime(toolsRuntime, family);
      } else {
        runtime = lambda.Runtime.DOTNET_8;
      }
    }
    if (
      runtime.family !== lambda.RuntimeFamily.DOTNET_CORE &&
      runtime.family !== lambda.RuntimeFamily.OTHER
    ) {
      throw new Error(
        `Unsupported runtime '${runtime.name}'. Only '.NET' and 'provided' runtimes are supported.`,
      );
    }

    // Resolve architecture from properties, aws-lambda-tools-defaults.json, get current processor architect for provided runtimes
    // or default to X86_64.
    let architecture = props.architecture;
    if (!architecture) {
      const toolsArchitecture = lambdaToolsDefaults?.[
        'function-architecture'
      ] as string | undefined;
      toolsArchitecture;
      if (toolsArchitecture) {
        architecture = lambdaArchitecture(toolsArchitecture);
      } else if (runtime.family === lambda.RuntimeFamily.OTHER) {
        architecture = lambdaArchitecture(process.arch);
      } else {
        architecture = lambda.Architecture.X86_64;
      }
    }
    if (
      runtime.family === lambda.RuntimeFamily.OTHER &&
      architecture?.name !== lambdaArchitecture(process.arch).name
    ) {
      throw new Error(
        `Unsupported architecture '${runtime.name}'. Only '${process.arch}' architure is supported for provided runtimes.`,
      );
    }

    // Resolve solution directory from property.
    // If is file, than use the folder else find traverse parent folders of projectDir to find solution file.
    let solutionDir: string;
    if (props.solutionDir) {
      solutionDir = props.solutionDir;
      const parsedSolutionDir = path.parse(props.solutionDir);
      if (
        parsedSolutionDir.ext &&
        (parsedSolutionDir.ext === '.sln' || parsedSolutionDir.ext === '.slnx')
      ) {
        if (!fs.existsSync(props.solutionDir)) {
          throw new Error(
            `Solutions file at ${props.solutionDir} doesn't exist`,
          );
        }
      } else if (
        !fs
          .readdirSync(solutionDir)
          .find(
            (file: string) => file.endsWith('.sln') || file.endsWith('.slnx'),
          )
      ) {
        throw new Error(
          `Solution file (.sln or .slnx) at ${props.solutionDir} doesn't exist`,
        );
      }
    } else {
      const solutionFile = findUp(['.sln', '.slnx'], projectDir);
      solutionDir = path.resolve(
        solutionFile ? path.dirname(solutionFile) : projectDir,
      );
    }

    // Resolve handler based on project name
    let handler: string;
    if (props.handler) {
      handler = props.handler;
    } else if (lambdaToolsDefaults && lambdaToolsDefaults['function-handler']) {
      handler = lambdaToolsDefaults['function-handler'];
    } else {
      const projectFile = fs
        .readdirSync(projectDir)
        .find((file) => file.endsWith('.csproj'));
      if (!projectFile) {
        throw new Error(`.csproj file at ${props.projectDir} doesn't exist`);
      }
      const projectName = projectFile.replace('.csproj', '');
      handler = projectName;
    }

    super(scope, id, {
      ...props,
      runtime,
      architecture,
      code: Bundling.bundle({
        ...(props.bundling ?? {}),
        runtime,
        architecture,
        projectDir,
        solutionDir,
      }),
      handler,
    });
  }
}

function lambdaArchitecture(architecture: string): lambda.Architecture {
  return architecture === 'arm64'
    ? lambda.Architecture.ARM_64
    : lambda.Architecture.X86_64;
}
