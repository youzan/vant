import Vue from 'vue';
import Dialog from './dialog.vue';
import merge from 'src/utils/merge';

const DialogConstructor = Vue.extend(Dialog);

let currentDialog;
let instance;
let dialogQueue = [];

const defaultCallback = action => {
  if (currentDialog) {
    let callback = currentDialog.callback;

    if (typeof callback === 'function') {
      callback(action);
    }

    if (currentDialog.resolve && action !== 'cancel') {
      currentDialog.resolve(action);
    } else {
      currentDialog.reject(action);
    }
  }
};

var initInstance = () => {
  instance = new DialogConstructor({
    el: document.createElement('div')
  });

  instance.callback = defaultCallback;
};

var showNextDialog = () => {
  if (!instance) {
    initInstance();
  }

  if (!instance.value && dialogQueue.length > 0) {
    currentDialog = dialogQueue.shift();

    let options = currentDialog.options;

    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop];
      }
    }
    console.log(instance)

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
  console.log(options)
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
    closeOnClickOverlay: false
  }, options));
};

DialogBox.confirm = function(options) {
  return DialogBox(merge({
    type: 'confirm',
    showCancelButton: true
  }, options));
};

DialogBox.close = function() {
  instance.value = false;
  dialogQueue = [];
  currentDialog = null;
};

export default DialogBox;
