import Vue from 'vue';
import Dialog from './dialog';

const DialogConstructor = Vue.extend(Dialog);

let currentDialog;
let instance;
let dialogQueue = [];

const defaultCallback = action => {
  /* istanbul ignore else */
  if (currentDialog) {
    if (currentDialog.resolve && action === 'confirm') {
      currentDialog.resolve(action);
    } else if (currentDialog.reject && action === 'cancel') {
      currentDialog.reject(action);
    }
  }
};

const initInstance = () => {
  instance = new DialogConstructor({
    el: document.createElement('div')
  });

  instance.$on('input', value => {
    instance.value = value;
  })
  instance.callback = defaultCallback;
};

const showNextDialog = () => {
  if (!instance) {
    initInstance();
  }

  /* istanbul ignore else */
  if (!instance.value && dialogQueue.length > 0) {
    currentDialog = dialogQueue.shift();

    const { options } = currentDialog;

    for (const prop in options) {
      /* istanbul ignore else */
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop];
      }
    }

    instance.callback = options.callback || defaultCallback;
    instance.value = true;
    document.body.appendChild(instance.$el);
  }
};

const DialogBox = options => {
  return new Promise((resolve, reject) => { // eslint-disable-line
    dialogQueue.push({
      options: { ...options },
      callback: options.callback,
      resolve: resolve,
      reject: reject
    });

    showNextDialog();
  });
};

DialogBox.alert = function(options) {
  return DialogBox({
    type: 'alert',
    title: '',
    message: '',
    closeOnClickOverlay: false,
    showCancelButton: false,
    ...options
  });
};

DialogBox.confirm = function(options) {
  return DialogBox({
    type: 'confirm',
    title: '',
    message: '',
    closeOnClickOverlay: true,
    showCancelButton: true,
    ...options
  });
};

DialogBox.close = function() {
  instance.value = false;
  dialogQueue = [];
  currentDialog = null;
};

export default DialogBox;
