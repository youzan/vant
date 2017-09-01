import Vue from 'vue';

const _global = Vue.prototype.$isServer ? global : window;

const DEFAULT_CONTEXT = {
  idSeed: 1,
  zIndex: 2000,
  hasModal: false,
  instances: {},
  modalStack: []
};

if (!_global.popupContext) {
  _global.popupContext = {
    ...DEFAULT_CONTEXT
  };
}

const PopupContext = {
  getContext(key) {
    return _global.popupContext[key];
  },

  setContext(key, value) {
    _global.popupContext[key] = value;
  },

  plusKeyByOne(key) {
    const oldVal = +_global.popupContext[key];
    _global.popupContext[key] = oldVal + 1;

    return oldVal;
  }
};

export default PopupContext;
