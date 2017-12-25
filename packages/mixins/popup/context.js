const PopupContext = {
  idSeed: 1,
  zIndex: 2000,
  stack: [],

  plusKey(key) {
    return this[key]++;
  },

  get top() {
    return this.stack[this.stack.length - 1];
  }
};

export default PopupContext;
