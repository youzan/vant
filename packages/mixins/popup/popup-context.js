import merge from '../../utils/merge';
import Vue from 'vue';

let context;
const _global = Vue.prototype.$isServer ? global : window;

if (_global && _global.popupContext) {
  context = _global.popupContext;
}

const DEFAULT_CONTEXT = {
  idSeed: 1,
  zIndex: 2000,
  hasModal: false,
  instances: {},
  modalStack: []
};

context = _global.popupContext = merge({}, DEFAULT_CONTEXT, context);

const PopupContext = {
  getContext(key) {
    return context[key];
  },

  setContext(key, value) {
    context[key] = value;
  },

  plusKeyByOne(key) {
    const oldVal = +context[key];
    context[key] = oldVal + 1;

    return oldVal;
  }
};

export default PopupContext;
