const PopupContext = {
  idSeed: 1,
  zIndex: 2000,
  instances: {},
  modalStack: [],

  plusKeyByOne(key) {
    return this[key]++;
  },

  get topModal() {
    return this.modalStack[this.modalStack.length - 1];
  }
};

export default PopupContext;
