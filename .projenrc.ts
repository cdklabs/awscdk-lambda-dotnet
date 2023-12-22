import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
import { javascript, DependencyType } from 'projen';

const project = new CdklabsConstructLibrary({
  author: 'AWS',
  authorAddress: 'aws-cdk-dev@amazon.com',
  cdkVersion: '2.80.0',
  jsiiVersion: '~5.3.0',
  typescriptVersion: '~5.3.3',
  defaultReleaseBranch: 'main',
  name: '@aws-cdk/aws-lambda-dotnet',
  projenrcTs: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  stability: 'experimental',
  setNodeEngineVersion: false,
  repositoryUrl: 'https://github.com/cdklabs/awscdk-lambda-dotnet.git',
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
