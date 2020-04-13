import * as cdk from '@aws-cdk/core';
import * as my_app from 'my_app';

export class OldVerStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new my_app.MyApp(this, "myApp", {visibilityTimeout: cdk.Duration.seconds(100)});
  }
}
