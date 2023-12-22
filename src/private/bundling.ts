import * as os from 'os';
import * as path from 'path';
import {
  Architecture,
  AssetCode,
  Code,
  Runtime,
  RuntimeFamily,
} from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib/core';
import { exec, getDotNetLambdaTools } from './util';
import { BundlingOptions } from '../types';

/**
 * Options for bundling
 */
export interface BundlingProps extends BundlingOptions {
  readonly projectDir: string;
  readonly solutionDir: string;

  /**
   * The runtime of the lambda function
   */
  readonly runtime: Runtime;

  /**
   * The system architecture of the lambda function
   */
  readonly architecture: Architecture;
}

/**
 * Bundling
 */
export class Bundling implements cdk.BundlingOptions {
  public static bundle(options: BundlingProps): AssetCode {
    const bundling = new Bundling(options);
    return Code.fromAsset(options.solutionDir, {
      assetHash: options.assetHash,
      assetHashType: options.assetHash
        ? cdk.AssetHashType.CUSTOM
        : cdk.AssetHashType.SOURCE,
      exclude: ['**/bin/', '**/obj/'],
      bundling: {
        image: bundling.image,
        command: bundling.command,
        environment: bundling.environment,
        local: bundling.local,
      },
    });
  }

  private static runsLocally?: boolean;
  private static defaultBuildImage = 'public.ecr.aws/sam/build-dotnet7';

  public readonly image: cdk.DockerImage;
  public readonly command: string[];
  public readonly environment?: { [key: string]: string };
  public readonly local?: cdk.ILocalBundling;

  private readonly msbuildParameters: string[];
  private readonly relativeProjectPath: string;

  constructor(private readonly props: BundlingProps) {
    Bundling.runsLocally = Bundling.runsLocally ?? getDotNetLambdaTools();

    const { solutionDir, projectDir } = props;
    this.relativeProjectPath = path.relative(
      path.resolve(solutionDir),
      path.resolve(projectDir),
    );
    this.relativeProjectPath =
      this.relativeProjectPath === '' ? '.' : this.relativeProjectPath;

    this.msbuildParameters = props.msbuildParameters ?? [];
    if (props.runtime.family === RuntimeFamily.OTHER) {
      this.msbuildParameters.push(
        '--self-contained',
        '/p:AssemblyName=bootstrap',
      );
    }

    const environment = {
      ...props.environment,
    };

    // Docker Bundling
    const shouldBuildImage =
      props.forcedDockerBundling || !Bundling.runsLocally;
    this.image = shouldBuildImage
      ? props.dockerImage ??
        cdk.DockerImage.fromRegistry(Bundling.defaultBuildImage)
      : cdk.DockerImage.fromRegistry('dummy'); // Do not build if we don't need to

    const bundlingCommand = this.createBundlingCommand(
      cdk.AssetStaging.BUNDLING_INPUT_DIR,
      cdk.AssetStaging.BUNDLING_OUTPUT_DIR,
      props.architecture,
    );
    this.command = ['bash', '-c', bundlingCommand];
    this.environment = environment;

    // Local bundling
    if (!props.forcedDockerBundling) {
      // only if Docker is not forced
      const osPlatform = os.platform();
      const createLocalCommand = (outputDir: string) =>
        this.createBundlingCommand(
          solutionDir,
          outputDir,
          props.architecture,
          osPlatform,
        );
      this.local = {
        tryBundle(outputDir: string) {
          if (Bundling.runsLocally == false) {
            process.stderr.write(
              'dotnet build cannot run locally. Switching to Docker bundling.\n',
            );
            return false;
          }
          const localCommand = createLocalCommand(outputDir);
          exec(
            osPlatform === 'win32' ? 'cmd' : 'bash',
            [osPlatform === 'win32' ? '/c' : '-c', localCommand],
            {
              env: { ...process.env, ...(environment ?? {}) },
              stdio: [
                // show output
                'ignore', // ignore stdio
                process.stderr, // redirect stdout to stderr
                'inherit', // inherit stderr
              ],
              cwd: props.solutionDir,
              windowsVerbatimArguments: osPlatform === 'win32',
            },
          );
          return true;
        },
      };
    }
  }

  public createBundlingCommand(
    inputDir: string,
    outputDir: string,
    architecture: Architecture,
    osPlatform: NodeJS.Platform = 'linux',
  ): string {
    const pathJoin = osPathJoin(osPlatform);

    const projectLocation = this.relativeProjectPath.replace(/\\/g, '/');
    const packageFile = pathJoin(outputDir, 'package.zip');
    const dotnetPackageCommand: string = [
      'dotnet',
      'lambda',
      'package',
      '--project-location',
      projectLocation,
      '-farch',
      architecture.name,
      '--output-package',
      packageFile,
      this.msbuildParameters.length > 0
        ? `--msbuild-parameters "${this.msbuildParameters.join(' ')}"`
        : '',
    ]
      .filter((c) => !!c)
      .join(' ');
    const unzipCommand: string =
      osPlatform === 'win32'
        ? [
            'powershell',
            '-command',
            'Expand-Archive',
            packageFile,
            outputDir,
          ].join(' ')
        : ['unzip', '-od', outputDir, packageFile].filter((c) => !!c).join(' ');
    const deleteCommand: string =
      osPlatform === 'win32'
        ? ['powershell', '-command', 'Remove-Item', packageFile]
            .filter((c) => !!c)
            .join(' ')
        : ['rm', packageFile].filter((c) => !!c).join(' ');

    return chain([
      ...(this.props.commandHooks?.beforeBundling(inputDir, outputDir) ?? []),
      dotnetPackageCommand,
      unzipCommand,
      deleteCommand,
      ...(this.props.commandHooks?.afterBundling(inputDir, outputDir) ?? []),
    ]);
  }
}

/**
 * Platform specific path join
 */
function osPathJoin(platform: NodeJS.Platform) {
  return function (...paths: string[]): string {
    const joined = path.join(...paths);
    // If we are on win32 but need posix style paths
    if (os.platform() === 'win32' && platform !== 'win32') {
      return joined.replace(/\\/g, '/');
    }
    return joined;
  };
}

function chain(commands: string[]): string {
  return commands.filter((c) => !!c).join(' && ');
}
