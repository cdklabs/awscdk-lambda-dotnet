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
    javaPackage: `software.amazon.awscdk.services.lambda.dotnet`,
    mavenGroupId: `software.amazon.awscdk`,
    mavenArtifactId: 'lambda-dotnet',
    mavenEndpoint: 'https://aws.oss.sonatype.org',
  },
  publishToPypi: {
    distName: 'aws-cdk.aws-lambda-dotnet',
    module: 'aws_cdk.aws_lambda_dotnet',
  },
  publishToNuget: {
    dotNetNamespace: 'Amazon.CDK.AWS.Lambda.DotNet',
    packageId: 'Amazon.CDK.AWS.Lambda.DotNet',
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
