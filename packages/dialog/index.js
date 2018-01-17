import Vue from 'vue';
import DialogComponent from './dialog';

let instance;

const defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  lockOnScroll: true,
  confirmButtonText: '',
  cancelButtonText: '',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

let currentDefaultOptions = {
  ...defaultOptions
};

const initInstance = () => {
  const DialogConstructor = Vue.extend(DialogComponent);
  instance = new DialogConstructor({
    el: document.createElement('div')
  });

  instance.$on('input', value => {
    instance.value = value;
  });

  document.body.appendChild(instance.$el);
};

const Dialog = options => {
  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }

    Object.assign(instance, {
      resolve,
      reject,
      ...options
    });
  });
};

Dialog.alert = options => Dialog({
  ...currentDefaultOptions,
  ...options
});

Dialog.confirm = options => Dialog({
  ...currentDefaultOptions,
  showCancelButton: true,
  ...options
});

Dialog.close = () => {
  instance.value = false;
};

Dialog.setDefaultOptions = (options = {}) => {
  currentDefaultOptions = {
    ...currentDefaultOptions,
    ...options
  };
};

Dialog.resetDefaultOptions = () => {
  currentDefaultOptions = {
    ...defaultOptions
  };
};

Vue.prototype.$dialog = Dialog;

export default Dialog;
export {
  DialogComponent as Dialog
};
