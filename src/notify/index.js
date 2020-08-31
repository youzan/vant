import { nextTick } from 'vue';
import { isObject, inBrowser, mountComponent } from '../utils';
import VanNotify from './Notify';

let timer;
let instance;

function parseOptions(message) {
  return isObject(message) ? message : { message };
}

function initInstance() {
  ({ instance } = mountComponent({
    data() {
      return {
        notifyProps: {
          show: false,
        },
      };
    },
    methods: {
      toggle(show) {
        this.notifyProps.show = show;
      },
      setProps(props) {
        this.notifyProps = props;
      },
    },
    render() {
      return (
        <VanNotify
          {...{
            ...this.notifyProps,
            'onUpdate:show': this.toggle,
          }}
        />
      );
    },
  }));
}

function Notify(options) {
  if (!inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = {
    ...Notify.currentOptions,
    ...parseOptions(options),
  };

  instance.setProps(options);
  clearTimeout(timer);

  if (options.duration && options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  nextTick(() => {
    instance.toggle(true);
  });

  return instance;
}

function defaultOptions() {
  return {
    type: 'danger',
    message: '',
    color: undefined,
    background: undefined,
    duration: 3000,
    className: '',
    onClose: null,
    onClick: null,
    onOpened: null,
  };
}

Notify.clear = () => {
  if (instance) {
    instance.toggle(false);
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = (options) => {
  Object.assign(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = () => {
  Notify.currentOptions = defaultOptions();
};

Notify.install = (app) => {
  app.use(VanNotify);
  app.config.globalProperties.$notify = Notify;
};

Notify.Component = VanNotify;

export default Notify;
