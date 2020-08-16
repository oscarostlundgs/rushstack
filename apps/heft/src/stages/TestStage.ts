// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { StageBase, StageHooksBase, IStageContext } from './StageBase';
import { HeftConfiguration } from '../configuration/HeftConfiguration';
import { AsyncSeriesHook, AsyncParallelHook } from 'tapable';
import { LoggingManager } from '../pluginFramework/logging/LoggingManager';

/**
 * @public
 */
export class TestStageHooks extends StageHooksBase<ITestStageProperties> {
  public readonly run: AsyncParallelHook = new AsyncParallelHook();
  public readonly configureTest: AsyncSeriesHook = new AsyncSeriesHook();
}

/**
 * @public
 */
export interface ITestStageProperties {
  watchMode: boolean;
  production: boolean;

  detectOpenHandles: boolean | undefined;
  findRelatedTests: ReadonlyArray<string> | undefined;
  silent: boolean | undefined;
  testNamePattern: string | undefined;
  testPathPattern: ReadonlyArray<string> | undefined;
  testTimeout: number | undefined;
  debugHeftReporter: boolean | undefined;
}

/**
 * @public
 */
export interface ITestStageContext extends IStageContext<TestStageHooks, ITestStageProperties> {}

export interface ITestStageOptions {
  watchMode: boolean;
  production: boolean;

  detectOpenHandles: boolean | undefined;
  findRelatedTests: ReadonlyArray<string> | undefined;
  silent: boolean | undefined;
  testNamePattern: string | undefined;
  testPathPattern: ReadonlyArray<string> | undefined;
  testTimeout: number | undefined;
  debugHeftReporter: boolean | undefined;
}

export class TestStage extends StageBase<TestStageHooks, ITestStageProperties, ITestStageOptions> {
  public constructor(heftConfiguration: HeftConfiguration, loggingManager: LoggingManager) {
    super(heftConfiguration, loggingManager, TestStageHooks);
  }

  protected getDefaultStageProperties(options: ITestStageOptions): ITestStageProperties {
    return {
      watchMode: options.watchMode,
      production: options.production,

      detectOpenHandles: options.detectOpenHandles,
      findRelatedTests: options.findRelatedTests,
      silent: options.silent,
      testNamePattern: options.testNamePattern,
      testPathPattern: options.testPathPattern,
      testTimeout: options.testTimeout,
      debugHeftReporter: options.debugHeftReporter
    };
  }

  protected async executeInnerAsync(): Promise<void> {
    await this.stageHooks.configureTest.promise();
    await this.stageHooks.run.promise();
  }
}
