import merge from 'src/utils/merge';

let context;
if (window && window.popupContext) {
  context = window.popupContext
}

const DEFAULT_CONTEXT = {
  idSeed: 1,
  zIndex: 2000,
  hasModal: false,
  instances: {},
  modalStack: []
}

context = window.popupContext = merge({}, DEFAULT_CONTEXT, context);

const PopupContext = {
  getContext(key) {
    return context[key];
  },

  setContext(key, value) {
    context[key] = value;
  },

  plusKeyByOne(key) {
    const oldVal = context[key];
    context[key] = oldVal + 1;

    return oldVal;
  }
};

export default PopupContext;
