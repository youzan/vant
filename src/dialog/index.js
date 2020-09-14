import { inBrowser } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import VanDialog from './Dialog';

let instance;

function initInstance() {
  const Wrapper = {
    setup() {
      const { state, toggle } = usePopupState();
      return () => <VanDialog {...{ ...state, 'onUpdate:show': toggle }} />;
    },
  };

  ({ instance } = mountComponent(Wrapper));
}

function Dialog(options) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }

    instance.open({
      ...Dialog.currentOptions,
      ...options,
      callback: (action) => {
        (action === 'confirm' ? resolve : reject)(action);
      },
    });
  });
}

Dialog.defaultOptions = {
  title: '',
  width: '',
  theme: null,
  message: '',
  overlay: true,
  callback: null,
  teleport: 'body',
  className: '',
  allowHtml: false,
  lockScroll: true,
  transition: 'van-dialog-bounce',
  beforeClose: null,
  overlayClass: '',
  overlayStyle: null,
  messageAlign: '',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: true,
  closeOnClickOverlay: false,
};

Dialog.alert = Dialog;

Dialog.confirm = (options) =>
  Dialog({
    showCancelButton: true,
    ...options,
  });

Dialog.close = () => {
  if (instance) {
    instance.toggle(false);
  }
};

Dialog.setDefaultOptions = (options) => {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = { ...Dialog.defaultOptions };
};

Dialog.resetDefaultOptions();

Dialog.install = (app) => {
  app.use(VanDialog);
  app.config.globalProperties.$dialog = Dialog;
};

Dialog.Component = VanDialog;

export default Dialog;
