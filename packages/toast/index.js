import Vue from 'vue';
import VueToast from './Toast';
import { isObj, isServer, isInDocument } from '../utils';

const defaultOptions = {
  type: 'text',
  mask: false,
  value: true,
  message: '',
  className: '',
  onClose: null,
  duration: 3000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  getContainer: 'body',
  overlayStyle: null
};
const parseOptions = message => (isObj(message) ? message : { message });

let queue = [];
let multiple = false;
let currentOptions = { ...defaultOptions };

function createInstance() {
  /* istanbul ignore if */
  if (isServer) {
    return {};
  }

  if (!queue.length || multiple || !isInDocument(queue[0].$el)) {
    const toast = new (Vue.extend(VueToast))({
      el: document.createElement('div')
    });
    queue.push(toast);
  }

  return queue[queue.length - 1];
}

// transform toast options to popup props
function transformer(options) {
  options.overlay = options.mask;
  return options;
}

function Toast(options = {}) {
  const toast = createInstance();

  // should add z-index if previous toast has not disappeared
  if (toast.value) {
    toast.updateZIndex();
  }

  options = {
    ...currentOptions,
    ...parseOptions(options),
    clear() {
      toast.value = false;

      if (options.onClose) {
        options.onClose();
      }

      if (multiple && !isServer) {
        clearTimeout(toast.timer);
        queue = queue.filter(item => item !== toast);

        const parent = toast.$el.parentNode;
        if (parent) {
          parent.removeChild(toast.$el);
        }

        toast.$destroy();
      }
    }
  };

  Object.assign(toast, transformer(options));
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

const createMethod = type => options => Toast({
  type, ...parseOptions(options)
});

['loading', 'success', 'fail'].forEach(method => {
  Toast[method] = createMethod(method);
});

Toast.clear = all => {
  if (queue.length) {
    if (all) {
      queue.forEach(toast => {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = options => {
  Object.assign(currentOptions, options);
};

Toast.resetDefaultOptions = () => {
  currentOptions = { ...defaultOptions };
};

Toast.allowMultiple = (value = true) => {
  multiple = value;
};

Toast.install = () => {
  Vue.use(VueToast);
};

Vue.prototype.$toast = Toast;

export default Toast;
