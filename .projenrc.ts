import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
import { DependencyType } from 'projen';
import { NpmAccess, TrailingComma } from 'projen/lib/javascript';

const project = new CdklabsConstructLibrary({
  author: 'AWS',
  authorAddress: 'aws-cdk-dev@amazon.com',
  cdkVersion: '2.80.0',
  jsiiVersion: '~5.3.0',
  typescriptVersion: '~5.3.3',
  defaultReleaseBranch: 'main',
  name: '@aws-cdk/aws-lambda-dotnet',
  projenrcTs: true,
  npmAccess: NpmAccess.PUBLIC,
  stability: 'experimental',
  repositoryUrl: 'https://github.com/cdklabs/awscdk-lambda-dotnet.git',
  autoApproveOptions: {
    allowedUsernames: ['aws-cdk-automation', 'dependabot[bot]', 'mergify[bot]'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
      trailingComma: TrailingComma.ES5,
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
  publishToPypi: {
    distName: 'cdklabs.aws-lambda-dotnet',
    module: 'cdklabs.aws_lambda_dotnet',
  },
  publishToNuget: {
    packageId: 'Cdklabs.AWS.Lambda.DotNet',
    dotNetNamespace: 'Cdklabs.AWS.Lambda.DotNet',
  },
  publishToMaven: {
    mavenGroupId: 'io.github.cdklabs',
    javaPackage: 'io.github.cdklabs.aws.lambda.dotnet',
    mavenArtifactId: 'cdklabs-aws-lambda-dotnet',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
  workflowBootstrapSteps: [
    {
      name: 'Install AWS Lambda Tools',
      run: 'dotnet tool update  -g Amazon.Lambda.Tools',
    },
  ],
});

project.deps.addDependency(
  '@aws-cdk/integ-tests-alpha@2.80.0-alpha.0',
  DependencyType.TEST
);

project.synth();
