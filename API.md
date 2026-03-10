# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DotNetFunction <a name="DotNetFunction" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction"></a>

A .NET Lambda function.

#### Initializers <a name="Initializers" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.Initializer"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

new DotNetFunction(scope: Construct, id: string, props: DotNetFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.Initializer.parameter.props">props</a></code> | <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps">DotNetFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps">DotNetFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.grantInvokeCompositePrincipal">grantInvokeCompositePrincipal</a></code> | Grant multiple principals the ability to invoke this Lambda via CompositePrincipal. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.invalidateVersionBasedOn">invalidateVersionBasedOn</a></code> | Mix additional information into the hash of the Version object. |

---

##### `toString` <a name="toString" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the aws-cdk-lib/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeCompositePrincipal` <a name="grantInvokeCompositePrincipal" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.grantInvokeCompositePrincipal"></a>

```typescript
public grantInvokeCompositePrincipal(compositePrincipal: CompositePrincipal): Grant[]
```

Grant multiple principals the ability to invoke this Lambda via CompositePrincipal.

###### `compositePrincipal`<sup>Required</sup> <a name="compositePrincipal" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.grantInvokeCompositePrincipal.parameter.compositePrincipal"></a>

- *Type:* aws-cdk-lib.aws_iam.CompositePrincipal

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
  aliasName: 'Live',
  version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addLayers"></a>

```typescript
public addLayers(layers: ...ILayerVersion[]): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.addLayers.parameter.layers"></a>

- *Type:* ...aws-cdk-lib.aws_lambda.ILayerVersion[]

the layers to be added.

---

##### `invalidateVersionBasedOn` <a name="invalidateVersionBasedOn" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.invalidateVersionBasedOn"></a>

```typescript
public invalidateVersionBasedOn(x: string): void
```

Mix additional information into the hash of the Version object.

The Lambda Function construct does its best to automatically create a new
Version when anything about the Function changes (its code, its layers,
any of the other properties).

However, you can sometimes source information from places that the CDK cannot
look into, like the deploy-time values of SSM parameters. In those cases,
the CDK would not force the creation of a new Version object when it actually
should.

This method can be used to invalidate the current Version object. Pass in
any string into this method, and make sure the string changes when you know
a new Version needs to be created.

This method may be called more than once.

###### `x`<sup>Required</sup> <a name="x" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.invalidateVersionBasedOn.parameter.x"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.isConstruct"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.isOwnedResource"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.isResource"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.classifyVersionProperty"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionArn"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

For `Function.addPermissions()` to work on this imported lambda, make sure that is
in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionAttributes"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

For `Function.addPermissions()` to work on this imported lambda, set the sameEnvironment property to true
if this imported lambda is in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionName"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAll"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllConcurrentExecutions"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllDuration"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllErrors"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllInvocations"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllThrottles"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { DotNetFunction } from '@aws-cdk/aws-lambda-dotnet'

DotNetFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@aws-cdk/aws-lambda-dotnet.DotNetFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---


## Structs <a name="Structs" id="Structs"></a>

### BundlingOptions <a name="BundlingOptions" id="@aws-cdk/aws-lambda-dotnet.BundlingOptions"></a>

Bundling options.

#### Initializer <a name="Initializer" id="@aws-cdk/aws-lambda-dotnet.BundlingOptions.Initializer"></a>

```typescript
import { BundlingOptions } from '@aws-cdk/aws-lambda-dotnet'

const bundlingOptions: BundlingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.assetHash">assetHash</a></code> | <code>string</code> | Specify a custom hash for this asset. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.assetHashType">assetHashType</a></code> | <code>aws-cdk-lib.AssetHashType</code> | Determines how the asset hash is calculated. Assets will get rebuilt and uploaded only if their hash has changed. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.commandHooks">commandHooks</a></code> | <code><a href="#@aws-cdk/aws-lambda-dotnet.ICommandHooks">ICommandHooks</a></code> | Command hooks. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.dockerImage">dockerImage</a></code> | <code>aws-cdk-lib.DockerImage</code> | A custom bundling Docker image. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Environment variables defined when go runs. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.forcedDockerBundling">forcedDockerBundling</a></code> | <code>boolean</code> | Force bundling in a Docker container even if local bundling is possible. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.msbuildParameters">msbuildParameters</a></code> | <code>string[]</code> | Arguments passed to the `dotnet publish` command. |

---

##### `assetHash`<sup>Optional</sup> <a name="assetHash" id="@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.assetHash"></a>

```typescript
public readonly assetHash: string;
```

- *Type:* string
- *Default:* based on `assetHashType`

Specify a custom hash for this asset.

If `assetHashType` is set it must
be set to `AssetHashType.CUSTOM`. For consistency, this custom hash will
be SHA256 hashed and encoded as hex. The resulting hash will be the asset
hash.

NOTE: the hash is used in order to identify a specific revision of the asset, and
used for optimizing and caching deployment activities related to this asset such as
packaging, uploading to Amazon S3, etc. If you chose to customize the hash, you will
need to make sure it is updated every time the asset changes, or otherwise it is
possible that some deployments will not be invalidated.

---

##### `assetHashType`<sup>Optional</sup> <a name="assetHashType" id="@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.assetHashType"></a>

```typescript
public readonly assetHashType: AssetHashType;
```

- *Type:* aws-cdk-lib.AssetHashType
- *Default:* AssetHashType.OUTPUT. If `assetHash` is also specified, the default is `CUSTOM`.

Determines how the asset hash is calculated. Assets will get rebuilt and uploaded only if their hash has changed.

If the asset hash is set to `OUTPUT` (default), the hash is calculated
after bundling. This means that any change in the output will cause
the asset to be invalidated and uploaded. Bear in mind that the
go binary that is output can be different depending on the environment
that it was compiled in. If you want to control when the output is changed
it is recommended that you use immutable build images such as
`public.ecr.aws/bitnami/golang:1.16.3-debian-10-r16`.

If the asset hash is set to `SOURCE`, then only changes to the source
directory will cause the asset to rebuild. If your go project has multiple
Lambda functions this means that an update to any one function could cause
all the functions to be rebuilt and uploaded.

---

##### `commandHooks`<sup>Optional</sup> <a name="commandHooks" id="@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.commandHooks"></a>

```typescript
public readonly commandHooks: ICommandHooks;
```

- *Type:* <a href="#@aws-cdk/aws-lambda-dotnet.ICommandHooks">ICommandHooks</a>
- *Default:* do not run additional commands

Command hooks.

---

##### `dockerImage`<sup>Optional</sup> <a name="dockerImage" id="@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.dockerImage"></a>

```typescript
public readonly dockerImage: DockerImage;
```

- *Type:* aws-cdk-lib.DockerImage
- *Default:* use the Docker image provided by

A custom bundling Docker image.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no environment variables are defined.

Environment variables defined when go runs.

---

##### `forcedDockerBundling`<sup>Optional</sup> <a name="forcedDockerBundling" id="@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.forcedDockerBundling"></a>

```typescript
public readonly forcedDockerBundling: boolean;
```

- *Type:* boolean
- *Default:* false

Force bundling in a Docker container even if local bundling is possible.

---

##### `msbuildParameters`<sup>Optional</sup> <a name="msbuildParameters" id="@aws-cdk/aws-lambda-dotnet.BundlingOptions.property.msbuildParameters"></a>

```typescript
public readonly msbuildParameters: string[];
```

- *Type:* string[]

Arguments passed to the `dotnet publish` command.

---

### DotNetFunctionProps <a name="DotNetFunctionProps" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps"></a>

Properties for a .NET Function.

#### Initializer <a name="Initializer" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.Initializer"></a>

```typescript
import { DotNetFunctionProps } from '@aws-cdk/aws-lambda-dotnet'

const dotNetFunctionProps: DotNetFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.adotInstrumentation">adotInstrumentation</a></code> | <code>aws-cdk-lib.aws_lambda.AdotInstrumentationConfig</code> | Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | Sets the application log level for the function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>boolean</code> | Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.logFormat">logFormat</a></code> | <code>string</code> | Sets the logFormat for the function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.loggingFormat">loggingFormat</a></code> | <code>aws-cdk-lib.aws_lambda.LoggingFormat</code> | Sets the loggingFormat for the function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group the function sends logs to. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.paramsAndSecrets">paramsAndSecrets</a></code> | <code>aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion</code> | Specify the configuration of Parameters and Secrets Extension. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.runtimeManagementMode">runtimeManagementMode</a></code> | <code>aws-cdk-lib.aws_lambda.RuntimeManagementMode</code> | Sets the runtime management configuration for a function's version. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.snapStart">snapStart</a></code> | <code>aws-cdk-lib.aws_lambda.SnapStartConf</code> | Enable SnapStart for Lambda Function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | Sets the system log level for the function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.projectDir">projectDir</a></code> | <code>string</code> | Directory containing your .csproj file. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.bundling">bundling</a></code> | <code><a href="#@aws-cdk/aws-lambda-dotnet.BundlingOptions">BundlingOptions</a></code> | Bundling options. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.handler">handler</a></code> | <code>string</code> | The name of the method within your code that Lambda calls to execute your function. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime environment. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.solutionDir">solutionDir</a></code> | <code>string</code> | Directory containing your .sln or .slnx file. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `adotInstrumentation`<sup>Optional</sup> <a name="adotInstrumentation" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.adotInstrumentation"></a>

```typescript
public readonly adotInstrumentation: AdotInstrumentationConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.AdotInstrumentationConfig
- *Default:* No ADOT instrumentation

Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation.

> [https://aws-otel.github.io/docs/getting-started/lambda](https://aws-otel.github.io/docs/getting-started/lambda)

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllOutbound` directly on the security group.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### `applicationLogLevel`<sup>Optional</sup> <a name="applicationLogLevel" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the application log level for the function.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `ipv6AllowedForDualStack`<sup>Optional</sup> <a name="ipv6AllowedForDualStack" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: boolean;
```

- *Type:* boolean
- *Default:* false

Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.

Only used if 'vpc' is supplied.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string
- *Default:* "Text"

Sets the logFormat for the function.

---

##### `loggingFormat`<sup>Optional</sup> <a name="loggingFormat" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.loggingFormat"></a>

```typescript
public readonly loggingFormat: LoggingFormat;
```

- *Type:* aws-cdk-lib.aws_lambda.LoggingFormat
- *Default:* LoggingFormat.TEXT

Sets the loggingFormat for the function.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* `/aws/lambda/${this.functionName}` - default log group created by Lambda

The log group the function sends logs to.

By default, Lambda functions send logs to an automatically created default log group named /aws/lambda/\<function name\>.
However you cannot change the properties of this auto-created log group using the AWS CDK, e.g. you cannot set a different log retention.

Use the `logGroup` property to create a fully customizable LogGroup ahead of time, and instruct the Lambda function to send logs to it.

Providing a user-controlled log group was rolled out to commercial regions on 2023-11-16.
If you are deploying to another type of region, please check regional availability first.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

This is a legacy API and we strongly recommend you move away from it if you can.
Instead create a fully customizable log group with `logs.LogGroup` and use the `logGroup` property
to instruct the Lambda function to send logs to it.
Migrating from `logRetention` to `logGroup` will cause the name of the log group to change.
Users and code and referencing the name verbatim will have to adjust.

In AWS CDK code, you can access the log group name directly from the LogGroup construct:
```ts
import * as logs from 'aws-cdk-lib/aws-logs';

declare const myLogGroup: logs.LogGroup;
myLogGroup.logGroupName;
```

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `paramsAndSecrets`<sup>Optional</sup> <a name="paramsAndSecrets" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.paramsAndSecrets"></a>

```typescript
public readonly paramsAndSecrets: ParamsAndSecretsLayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion
- *Default:* No Parameters and Secrets Extension

Specify the configuration of Parameters and Secrets Extension.

> [https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html)

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `runtimeManagementMode`<sup>Optional</sup> <a name="runtimeManagementMode" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.runtimeManagementMode"></a>

```typescript
public readonly runtimeManagementMode: RuntimeManagementMode;
```

- *Type:* aws-cdk-lib.aws_lambda.RuntimeManagementMode
- *Default:* Auto

Sets the runtime management configuration for a function's version.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.snapStart"></a>

```typescript
public readonly snapStart: SnapStartConf;
```

- *Type:* aws-cdk-lib.aws_lambda.SnapStartConf
- *Default:* No snapstart

Enable SnapStart for Lambda Function.

SnapStart is currently supported only for Java 11, 17 runtime

---

##### `systemLogLevel`<sup>Optional</sup> <a name="systemLogLevel" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the system log level for the function.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

##### `projectDir`<sup>Required</sup> <a name="projectDir" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.projectDir"></a>

```typescript
public readonly projectDir: string;
```

- *Type:* string

Directory containing your .csproj file.

---

##### `bundling`<sup>Optional</sup> <a name="bundling" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.bundling"></a>

```typescript
public readonly bundling: BundlingOptions;
```

- *Type:* <a href="#@aws-cdk/aws-lambda-dotnet.BundlingOptions">BundlingOptions</a>
- *Default:* use default bundling options

Bundling options.

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string
- *Default:* the .csproj file is used as project name and the handler is set to the project name or the handler is found reading the aws-lambda-tools-defaults.json file in the project directory.

The name of the method within your code that Lambda calls to execute your function.

The format includes the file name. It can also include namespaces and other qualifiers,
depending on the runtime. For more information,
see https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime
- *Default:* lambda.Runtime.DOTNET_8

The runtime environment.

Only runtimes of the .NET family and provided family are supported.

---

##### `solutionDir`<sup>Optional</sup> <a name="solutionDir" id="@aws-cdk/aws-lambda-dotnet.DotNetFunctionProps.property.solutionDir"></a>

```typescript
public readonly solutionDir: string;
```

- *Type:* string
- *Default:* the path is found by walking up parent directories searching for a `.sln` or `.slnx` file from the location of `projectDir`. If no solution file is found, the `projectDir` will be used.

Directory containing your .sln or .slnx file.

This will be used as the source of the volume mounted in the Docker
container and will be the directory where it will run `dotnet build` from.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ICommandHooks <a name="ICommandHooks" id="@aws-cdk/aws-lambda-dotnet.ICommandHooks"></a>

- *Implemented By:* <a href="#@aws-cdk/aws-lambda-dotnet.ICommandHooks">ICommandHooks</a>

Command hooks.

These commands will run in the environment in which bundling occurs: inside
the container for Docker bundling or on the host OS for local bundling.

Commands are chained with `&&`.

```text
{
  // Run tests prior to bundling
  beforeBundling(inputDir: string, outputDir: string): string[] {
    return [`go test -mod=vendor ./...`];
  }
  // ...
}
```

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.ICommandHooks.afterBundling">afterBundling</a></code> | Returns commands to run after bundling. |
| <code><a href="#@aws-cdk/aws-lambda-dotnet.ICommandHooks.beforeBundling">beforeBundling</a></code> | Returns commands to run before bundling. |

---

##### `afterBundling` <a name="afterBundling" id="@aws-cdk/aws-lambda-dotnet.ICommandHooks.afterBundling"></a>

```typescript
public afterBundling(inputDir: string, outputDir: string): string[]
```

Returns commands to run after bundling.

Commands are chained with `&&`.

###### `inputDir`<sup>Required</sup> <a name="inputDir" id="@aws-cdk/aws-lambda-dotnet.ICommandHooks.afterBundling.parameter.inputDir"></a>

- *Type:* string

---

###### `outputDir`<sup>Required</sup> <a name="outputDir" id="@aws-cdk/aws-lambda-dotnet.ICommandHooks.afterBundling.parameter.outputDir"></a>

- *Type:* string

---

##### `beforeBundling` <a name="beforeBundling" id="@aws-cdk/aws-lambda-dotnet.ICommandHooks.beforeBundling"></a>

```typescript
public beforeBundling(inputDir: string, outputDir: string): string[]
```

Returns commands to run before bundling.

Commands are chained with `&&`.

###### `inputDir`<sup>Required</sup> <a name="inputDir" id="@aws-cdk/aws-lambda-dotnet.ICommandHooks.beforeBundling.parameter.inputDir"></a>

- *Type:* string

---

###### `outputDir`<sup>Required</sup> <a name="outputDir" id="@aws-cdk/aws-lambda-dotnet.ICommandHooks.beforeBundling.parameter.outputDir"></a>

- *Type:* string

---


