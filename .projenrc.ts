import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "AWS",
  authorAddress: "aws-cdk-dev@amazon.com",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  name: "awscdk-lambda-dotnet",
  projenrcTs: true,
  release: false,
  repositoryUrl: "https://github.com/cdklabs/awscdk-lambda-dotnet.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();