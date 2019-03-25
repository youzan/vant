import { OverlayConfig } from './overlay';

export type StackItem = {
  vm: any;
  config: OverlayConfig;
};

export const context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [] as StackItem[],

  get top(): StackItem {
    return this.stack[this.stack.length - 1];
  }
};
