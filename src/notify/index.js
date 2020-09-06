import { isObject, inBrowser } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import VanNotify from './Notify';

let timer;
let instance;

function parseOptions(message) {
  return isObject(message) ? message : { message };
}

function initInstance() {
  ({ instance } = mountComponent({
    setup() {
      const { state, toggle } = usePopupState();
      return () => (
        <VanNotify
          {...{
            ...state,
            'onUpdate:show': toggle,
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

  instance.open(options);
  clearTimeout(timer);

  if (options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

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
