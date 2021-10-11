import { App } from 'vue';
import {
  extend,
  isObject,
  inBrowser,
  withInstall,
  ComponentInstance,
} from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import VanNotify from './Notify';
import type { NotifyMessage, NotifyOptions } from './types';

let timer: number;
let instance: ComponentInstance;

const parseOptions = (message: NotifyMessage | NotifyOptions) =>
  isObject(message) ? message : { message };

function initInstance() {
  ({ instance } = mountComponent({
    setup() {
      const { state, toggle } = usePopupState();
      return () => <VanNotify {...state} onUpdate:show={toggle} />;
    },
  }));
}

function Notify(options: NotifyMessage | NotifyOptions) {
  if (!inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = extend({}, Notify.currentOptions, parseOptions(options));

  instance.open(options);
  clearTimeout(timer);

  if (options.duration! > 0) {
    timer = window.setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

const getDefaultOptions = (): NotifyOptions => ({
  type: 'danger',
  color: undefined,
  message: '',
  onClose: undefined,
  onClick: undefined,
  onOpened: undefined,
  duration: 3000,
  className: '',
  lockScroll: false,
  background: undefined,
});

Notify.clear = () => {
  if (instance) {
    instance.toggle(false);
  }
};

Notify.currentOptions = getDefaultOptions();

Notify.setDefaultOptions = (options: NotifyOptions) => {
  extend(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = () => {
  Notify.currentOptions = getDefaultOptions();
};

Notify.Component = withInstall(VanNotify);

Notify.install = (app: App) => {
  app.use(Notify.Component);
  app.config.globalProperties.$notify = Notify;
};

export { Notify };
