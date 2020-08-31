import { nextTick } from 'vue';
import { isObject, inBrowser } from '../utils';
import { mountComponent } from '../utils/mount-component';
import VanToast from './Toast';

const defaultOptions = {
  icon: '',
  type: 'text',
  message: '',
  className: '',
  overlay: false,
  onClose: null,
  onOpened: null,
  duration: 2000,
  teleport: 'body',
  iconPrefix: undefined,
  position: 'middle',
  transition: 'van-fade',
  forbidClick: false,
  loadingType: undefined,
  overlayStyle: null,
  closeOnClick: false,
  closeOnClickOverlay: false,
};

// default options of specific type
let defaultOptionsMap = {};

let queue = [];
let multiple = false;
let currentOptions = {
  ...defaultOptions,
};

function parseOptions(message) {
  if (isObject(message)) {
    return message;
  }

  return { message };
}

function isInDocument(element) {
  return document.body.contains(element);
}

function createInstance() {
  /* istanbul ignore if */
  if (!inBrowser) {
    return {};
  }

  queue = queue.filter((item) => isInDocument(item.$el));

  if (!queue.length || multiple) {
    const { instance, unmount } = mountComponent({
      data() {
        return {
          timer: null,
          message: null,
          state: {
            show: false,
          },
        };
      },
      watch: {
        message(val) {
          this.state.message = val;
        },
      },
      methods: {
        clear() {
          this.toggle(false);
        },
        toggle(show, duration) {
          this.state.show = show;

          if (show) {
            clearTimeout(this.timer);

            if (duration > 0) {
              this.timer = setTimeout(() => {
                this.clear();
              }, duration);
            }
          }
        },
        setState(props) {
          this.state = {
            ...props,
            duration: undefined,
          };
        },
        onClosed() {
          if (multiple && inBrowser) {
            clearTimeout(this.timer);
            queue = queue.filter((item) => item !== this);
            unmount();
          }
        },
      },
      render() {
        return (
          <VanToast
            {...{
              ...this.state,
              onClosed: this.onClosed,
              'onUpdate:show': this.toggle,
            }}
          />
        );
      },
    });

    queue.push(instance);
  }

  return queue[queue.length - 1];
}

function Toast(options = {}) {
  const toast = createInstance();

  // should add z-index if previous toast has not disappeared
  if (toast.value) {
    toast.updateZIndex();
  }

  options = parseOptions(options);
  options = {
    ...currentOptions,
    ...defaultOptionsMap[options.type || currentOptions.type],
    ...options,
  };

  toast.setState(options);

  nextTick(() => {
    toast.toggle(true, options.duration);
  });

  return toast;
}

const createMethod = (type) => (options) =>
  Toast({
    type,
    ...parseOptions(options),
  });

['loading', 'success', 'fail'].forEach((method) => {
  Toast[method] = createMethod(method);
});

Toast.clear = (all) => {
  if (queue.length) {
    if (all) {
      queue.forEach((toast) => {
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

Toast.setDefaultOptions = (type, options) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options;
  } else {
    Object.assign(currentOptions, type);
  }
};

Toast.resetDefaultOptions = (type) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null;
  } else {
    currentOptions = { ...defaultOptions };
    defaultOptionsMap = {};
  }
};

Toast.allowMultiple = (value = true) => {
  multiple = value;
};

Toast.install = (app) => {
  app.use(VanToast);
  app.config.globalProperties.$toast = Toast;
};

export default Toast;
