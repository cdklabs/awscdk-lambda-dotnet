import { IntegTest, ExpectedResult } from '@aws-cdk/integ-tests-alpha';
import { App, CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from '../src';

/*
 * Stack verification steps:
 * * aws lambda invoke --function-name <deployed fn name> --invocation-type Event --payload '"OK"' response.json
 */

class TestStack extends Stack {
  public readonly functionName: string;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const fn = new lambda.DotNetFunction(this, 'lambda-handler', {
      projectDir: 'lambda-handler-docker',
      handler: 'LambdaHandler::LambdaHandler.Function::FunctionHandler',
      bundling: {
        forcedDockerBundling: true,
      },
    });
    this.functionName = fn.functionName;

    new CfnOutput(this, 'FunctionArn', {
      value: fn.functionArn,
    });
  }
}

const app = new App();
const testCase = new TestStack(app, 'integ-lambda-dotnet-docker');
const integ = new IntegTest(app, 'lambda-dotnet-docker', {
  testCases: [testCase],
  stackUpdateWorkflow: false,
});

const invoke = integ.assertions.invokeFunction({
  functionName: testCase.functionName,
});

invoke.expect(
  ExpectedResult.objectLike({
    Payload: '"Ok"',
  }),
);
app.synth();
