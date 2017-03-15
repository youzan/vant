import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./toast.vue'));
let toastQueue = [];

const getInstance = () => {
  if (toastQueue.length > 0) {
    const instance = toastQueue[0];
    toastQueue.splice(0, 1);
    return instance;
  }
  return new ToastConstructor({
    el: document.createElement('div')
  });
};

const returnInstance = instance => {
  if (instance) {
    toastQueue.push(instance);
  }
};

const removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

var Toast = (options = {}) => {
  const duration = options.duration || 3000;

  let instance = getInstance();
  returnInstance(instance);
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.type = options.type ? options.type : 'text';
  instance.message = typeof options === 'string' ? options : options.message;

  document.body.appendChild(instance.$el);
  Vue.nextTick(function() {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
    instance.timer = setTimeout(function() {
      if (instance.closed) return;
      instance.visible = false;
      instance.$el.addEventListener('transitionend', removeDom);
      instance.closed = true;
    }, duration);
  });
  return instance;
};

export default Toast;
