# AWS Lambda .NET Library
<!--BEGIN STABILITY BANNER-->

---

![cdk-constructs: Experimental](https://img.shields.io/badge/cdk--constructs-experimental-important.svg?style=for-the-badge)

> The APIs of higher level constructs in this module are experimental and under active development.
> They are subject to non-backward compatible changes or removal in any future version. These are
> not subject to the [Semantic Versioning](https://semver.org/) model and breaking changes will be
> announced in the release notes. This means that while you may use them, you may need to update
> your source code when upgrading to a newer version of this package.

---

<!--END STABILITY BANNER-->

This library provides constructs for .NET Lambda functions.

To use this module you will either need to have `.NET SDK` installed (`.NET 6.0` or later) with the [AWS Lambda Tools for .NET](https://docs.aws.amazon.com/lambda/latest/dg/csharp-package-cli.html) or `Docker` installed.

## .NET Function

Define a `DotNetFunction`:

```ts
new dotnet.DotNetFunction(this, 'MyFunction', {
  projectDir: 'src/MyFunction'
});
```

All other properties of `lambda.Function` are supported, see also the [AWS Lambda construct library](https://github.com/aws/aws-cdk/tree/main/packages/aws-cdk-lib/aws-lambda).

### Custom Runtime and Native AOT

With this construct it is possible to use s custom runtime by setting the runtime to `PROVIDED_AL2`. This allows you to run unsupported .NET runtime versions like .NET 7.0 or [Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot). Setting the runtime to `PROVIDED_AL2` will instruct CDK and the AWS Lambda Tools for .NET to build your project in a Docker container based of Amazon Linux 2. An example can be found below.

```ts
new dotnet.DotNetFunction(this, 'MyFunction', {
  projectDir: 'src/MyFunction'
  runtime: lambda.Runtime.PROVIDED_AL2,
  bundling: {
    msbuildParameters: ['/p:PublishAot=true'],
  },
});
```

> Publishing your application with Native AOT requires you to use the same processor architecture for the Lambda function as for your build environment. Without specification, the construct automatically selects the processor architecture of the machine where CDK is building your project.

## Community Extensions

We encourage the development of Community Service Extensions that support
advanced features. Here are some useful extensions that we have reviewed:

- [ListenerRulesExtension](https://www.npmjs.com/package/@wheatstalk/ecs-service-extension-listener-rules) for more precise control over Application Load Balancer rules

> Please submit a pull request so that we can review your service extension and
> list it here.
