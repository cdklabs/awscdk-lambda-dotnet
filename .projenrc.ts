import {
  CdklabsConstructLibrary,
  JsiiLanguage,
} from 'cdklabs-projen-project-types';
import { DependencyType } from 'projen';

const project = new CdklabsConstructLibrary({
  author: 'AWS',
  authorAddress: 'aws-cdk-dev@amazon.com',
  cdkVersion: '2.80.0',
  jsiiVersion: '~5.3.0',
  typescriptVersion: '~5.3.3',
  defaultReleaseBranch: 'main',
  name: '@aws-cdk/aws-lambda-dotnet',
  private: false,
  enablePRAutoMerge: true,
  projenrcTs: true,
  stability: 'experimental',
  setNodeEngineVersion: false,
  repositoryUrl: 'https://github.com/cdklabs/awscdk-lambda-dotnet.git',
  jsiiTargetLanguages: [
    JsiiLanguage.JAVA,
    JsiiLanguage.PYTHON,
    JsiiLanguage.DOTNET,
  ],
  publishToMaven: {
    mavenGroupId: `io.github.cdklabs`,
    javaPackage: `io.github.cdklabs.services.lambda.dotnet`,
    mavenArtifactId: 'aws-lambda-dotnet',
    mavenEndpoint: 'https://aws.oss.sonatype.org',
  },
  publishToPypi: {
    distName: 'cdklabs.aws-lambda-dotnet',
    module: 'cdklabs.aws_lambda_dotnet',
  },
  publishToNuget: {
    dotNetNamespace: 'CdkLabs.AWS.Lambda.DotNet',
    packageId: 'CdkLabs.AWS.Lambda.DotNet',
  },
  autoApproveUpgrades: true,
  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
    },
  },
  gitignore: [
    '*.d.ts',
    '*.generated.ts',
    '*.js',
    '**/integ.*.snapshot/asset.*/',
    '**/bin',
    '**/obj',
    '/*.sln',
  ],
  workflowBootstrapSteps: [
    {
      name: 'Install AWS Lambda Tools',
      run: 'dotnet tool update -g Amazon.Lambda.Tools',
    },
  ],
});

project.deps.addDependency(
  '@aws-cdk/integ-tests-alpha@2.80.0-alpha.0',
  DependencyType.TEST,
);

project.synth();
