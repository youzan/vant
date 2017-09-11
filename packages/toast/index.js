import Vue from 'vue';
import VueToast from './toast';

let instance;

const defaultOptions = {
  visible: true,
  type: 'text',
  duration: 3000,
  forbidClick: false,
  clear: () => {
    instance.visible = false;
  }
};

const createInstance = () => {
  if (!instance) {
    const ToastConstructor = Vue.extend(VueToast);
    instance = new ToastConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
  }
};

const Toast = (options = {}) => {
  createInstance();

  options = typeof options === 'string' ? { message: options } : options;
  options = { ...defaultOptions, ...options };
  Object.assign(instance, options);

  clearTimeout(instance.timer);

  if (options.duration !== 0) {
    instance.timer = setTimeout(() => {
      instance.clear();
    }, options.duration);
  }

  return instance;
};

const createMethod = type => (options = {}) => Toast({
  type,
  message: typeof options === 'string' ? options : options.message,
  ...options
});

Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = () => {
  instance && instance.clear();
};

export default Toast;
