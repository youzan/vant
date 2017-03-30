import Vue from 'vue';
import merge from 'src/utils/merge';

const ToastConstructor = Vue.extend(require('./toast.vue'));
let instance;

const getInstance = () => {
  if (instance) {
    instance.clear();
  }
  instance = new ToastConstructor({
    el: document.createElement('div')
  });
  return instance;
};


const removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

var Toast = (options = {}) => {
  const duration = options.duration || 3000;

  let instance = getInstance();
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.type = options.type ? options.type : 'text';
  instance.message = typeof options === 'string' ? options : options.message;
  instance.forbidClick = options.forbidClick ? options.forbidClick : false;
  instance.clear = () => {
    if (instance.closed) return;
    instance.visible = false;
    instance.$el.addEventListener('transitionend', removeDom);
    instance.closed = true;
  };

  document.body.appendChild(instance.$el);
  Vue.nextTick(function() {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
    instance.timer = setTimeout(function() {
      instance.clear();
    }, duration);
  });
  return instance;
};

Toast.loading = (options) => {
  return new Toast(merge({
    type: 'loading'
  }, options));
};

Toast.success = (options) => {
  const message = typeof options === 'string' ? options : options.message;
  return new Toast(merge({
    type: 'success',
    message: message
  }, options));
};

Toast.fail = (options) => {
  const message = typeof options === 'string' ? options : options.message;
  return new Toast(merge({
    type: 'fail',
    message: message
  }, options));
};

export default Toast;
