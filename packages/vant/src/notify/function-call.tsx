import { extend, isObject, inBrowser, type ComponentInstance } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import VanNotify from './Notify';
import type { NotifyMessage, NotifyOptions } from './types';

let timer: ReturnType<typeof setTimeout>;
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

const getDefaultOptions = (): NotifyOptions => ({
  type: 'danger',
  color: undefined,
  message: '',
  onClose: undefined,
  onClick: undefined,
  onOpened: undefined,
  duration: 3000,
  position: undefined,
  className: '',
  lockScroll: false,
  background: undefined,
});

let currentOptions = getDefaultOptions();

/**
 * Close the currently displayed Notify
 */
export const closeNotify = () => {
  if (instance) {
    instance.toggle(false);
  }
};

/**
 * Display Notify at the top of the page
 */
export function showNotify(options: NotifyMessage | NotifyOptions) {
  if (!inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = extend({}, currentOptions, parseOptions(options));

  instance.open(options);
  clearTimeout(timer);

  if (options.duration! > 0) {
    timer = setTimeout(closeNotify, options.duration);
  }

  return instance;
}

/**
 * Modify the default configuration, affecting all `showNotify` calls
 */
export const setNotifyDefaultOptions = (options: NotifyOptions) =>
  extend(currentOptions, options);

/**
 * Reset the default configuration, affecting all `showNotify` calls
 */
export const resetNotifyDefaultOptions = () => {
  currentOptions = getDefaultOptions();
};
