#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { OldVerStack } from '../lib/old_ver-stack';

const app = new cdk.App();
new OldVerStack(app, 'OldVerStack');
