import Vue from 'vue';
import VanNotify from './Notify';
import { isObject, isServer } from '../utils';
import { mount } from '../utils/functional';
import { NotifyOptions } from 'types/notify';

let timer: number | NodeJS.Timeout;
let instance: any;

function parseOptions(message: NotifyOptions): NotifyOptions {
  return isObject(message) ? message : { message };
}

function Notify(options: NotifyOptions) {
  /* istanbul ignore if */
  if (isServer) {
    return;
  }

  if (!instance) {
    instance = mount(VanNotify, {
      on: {
        click(event: Event) {
          if (instance.onClick) {
            instance.onClick(event);
          }
        },
        close() {
          if (instance.onClose) {
            instance.onClose();
          }
        },
        opened() {
          if (instance.onOpened) {
            instance.onOpened();
          }
        },
      },
    });
  }

  options = {
    ...Notify.currentOptions,
    ...parseOptions(options),
  };

  Object.assign(instance, options);
  clearTimeout(timer as NodeJS.Timeout);

  if (options.duration && options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

function defaultOptions(): NotifyOptions {
  return {
    type: 'danger',
    value: true,
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
    instance.value = false;
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = (options: NotifyOptions) => {
  Object.assign(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = () => {
  Notify.currentOptions = defaultOptions();
};

Notify.install = () => {
  Vue.use(VanNotify as any);
};

Notify.Component = VanNotify;

Vue.prototype.$notify = Notify;

export default Notify;
