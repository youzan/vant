export type StackItem = {
  vm: any;
  overlay: any;
};

export const context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [] as StackItem[],
  find(vm: any): StackItem | undefined {
    return this.stack.filter((item) => item.vm === vm)[0];
  },
};
