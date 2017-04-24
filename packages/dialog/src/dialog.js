import Vue from 'vue';
import Dialog from './dialog.vue';
import merge from 'src/utils/merge';

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

  instance.callback = defaultCallback;
};

const showNextDialog = () => {
  if (!instance) {
    initInstance();
  }

  if (!instance.value && dialogQueue.length > 0) {
    currentDialog = dialogQueue.shift();

    const options = currentDialog.options;

    for (const prop in options) {
      /* istanbul ignore else */
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop];
      }
    }

    if (options.callback === undefined) {
      instance.callback = defaultCallback;
    }

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.value = true;
    });
  }
};

var DialogBox = options => {
  return new Promise((resolve, reject) => { // eslint-disable-line
    dialogQueue.push({
      options: merge({}, options),
      callback: options.callback,
      resolve: resolve,
      reject: reject
    });

    showNextDialog();
  });
};

DialogBox.alert = function(options) {
  return DialogBox(merge({
    type: 'alert',
    title: '',
    message: '',
    closeOnClickOverlay: false,
    showCancelButton: false
  }, options));
};

DialogBox.confirm = function(options) {
  return DialogBox(merge({
    type: 'confirm',
    title: '',
    message: '',
    closeOnClickOverlay: true,
    showCancelButton: true
  }, options));
};

DialogBox.close = function() {
  instance.value = false;
  dialogQueue = [];
  currentDialog = null;
};

export default DialogBox;
