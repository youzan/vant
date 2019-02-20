import Vue from 'vue';
import VanNotify from './Notify';
import { RED, WHITE } from '../utils/color';
import { isObj, isServer } from '../utils';
import { mount } from '../utils/functional';
import { NotifyOptions } from 'types/notify';

let timer: number | NodeJS.Timeout;
let instance: any;

function parseOptions(message: NotifyOptions): NotifyOptions {
  return isObj(message) ? message : ({ message } as NotifyOptions);
}

function Notify(options: NotifyOptions) {
  /* istanbul ignore if */
  if (isServer) {
    return;
  }

  if (!instance) {
    instance = mount(VanNotify);
  }

  options = {
    ...Notify.currentOptions,
    ...parseOptions(options)
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
    value: true,
    message: '',
    color: WHITE,
    background: RED,
    duration: 3000,
    className: ''
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

Vue.prototype.$notify = Notify;

export default Notify;
