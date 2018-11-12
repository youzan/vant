export default {
  zIndex: 2000,
  stack: [],
  lockCount: 0,

  get top() {
    return this.stack[this.stack.length - 1];
  }
};
