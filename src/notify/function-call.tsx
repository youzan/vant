import { App } from 'vue';
import {
  extend,
  isObject,
  inBrowser,
  withInstall,
  ComponentInstance,
} from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import VanNotify, { NotifyType } from './Notify';

let timer: number;
let instance: ComponentInstance;

export type NotifyMessage = string | number;

export type NotifyOptions = {
  type?: NotifyType;
  color?: string;
  message?: NotifyMessage;
  duration?: number;
  className?: unknown;
  background?: string;
  lockScroll?: boolean;
  onClick?: (event: MouseEvent) => void;
  onClose?: () => void;
  onOpened?: () => void;
};

function parseOptions(message: NotifyMessage | NotifyOptions) {
  return isObject(message) ? message : { message };
}

function initInstance() {
  ({ instance } = mountComponent({
    setup() {
      const { state, toggle } = usePopupState();
      return () => <VanNotify {...state} {...{ 'onUpdate:show': toggle }} />;
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

function defaultOptions() {
  return {
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
  } as NotifyOptions;
}

Notify.clear = () => {
  if (instance) {
    instance.toggle(false);
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = (options: NotifyOptions) => {
  extend(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = () => {
  Notify.currentOptions = defaultOptions();
};

Notify.install = (app: App) => {
  app.use(withInstall<typeof VanNotify>(VanNotify));
  app.config.globalProperties.$notify = Notify;
};

Notify.Component = withInstall<typeof VanNotify>(VanNotify);

export { Notify };
