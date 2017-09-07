import Vue from 'vue';
import DialogComponent from './dialog';

let instance;

const defaultConfig = {
  value: true,
  title: '',
  message: '',
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
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
  ...defaultConfig,
  ...options
});

Dialog.confirm = options => Dialog({
  ...defaultConfig,
  showCancelButton: true,
  ...options
});

Dialog.close = () => {
  instance.value = false;
};

export default Dialog;
export {
  DialogComponent as Dialog
};
