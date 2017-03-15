import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./toast.vue'));
let toastPool = [];

let getInstance = () => {
  if (toastPool.length > 0) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new ToastConstructor({
    el: document.createElement('div')
  });
};

const returnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
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
      instance.close();
    }, duration);
  });
  return instance;
};


Toast.close = function() {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
  this.closed = true;
  returnInstance(this);
};

export default Toast;
