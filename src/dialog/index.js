import { createApp, nextTick } from 'vue';
import VanDialog from './Dialog';
import { inBrowser } from '../utils';

let instance;

function initInstance() {
  const root = document.createElement('div');
  document.body.appendChild(root);

  instance = createApp({
    data() {
      return {
        dialogProps: {
          show: false,
        },
      };
    },
    methods: {
      onToggle(show) {
        this.dialogProps.show = show;
      },
    },
    render() {
      return (
        <VanDialog
          lazyRender={false}
          {...{
            ...this.dialogProps,
            'onUpdate:show': this.onToggle,
          }}
        />
      );
    },
  }).mount(root);
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

    instance.dialogProps = {
      ...Dialog.currentOptions,
      ...options,
      callback: (action) => {
        (action === 'confirm' ? resolve : reject)(action);
      },
    };

    nextTick(() => {
      instance.dialogProps.show = true;
    })
  });
}

Dialog.defaultOptions = {
  show: false,
  title: '',
  width: '',
  message: '',
  overlay: true,
  callback: null,
  className: '',
  allowHtml: true,
  lockScroll: true,
  transition: 'van-dialog-bounce',
  beforeClose: null,
  overlayClass: '',
  overlayStyle: null,
  messageAlign: '',
  getContainer: 'body',
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
    instance.value = false;
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
  console.log('use VanDialog', VanDialog);
  app.use(VanDialog);
  app.config.globalProperties.$dialog = Dialog;
};

Dialog.Component = VanDialog;

export default Dialog;
