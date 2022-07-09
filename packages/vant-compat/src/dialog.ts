import {
  Dialog as VanDialog,
  showDialog,
  closeDialog,
  showConfirmDialog,
  setDialogDefaultOptions,
  resetDialogDefaultOptions,
} from 'vant';
import type { App } from 'vue';

export const Dialog = (...args: Parameters<typeof showDialog>) =>
  showDialog(...args);

Dialog.Component = VanDialog;
Dialog.alert = Dialog;
Dialog.config = showConfirmDialog;
Dialog.close = closeDialog;
Dialog.setDefaultOptions = setDialogDefaultOptions;
Dialog.resetDefaultOptions = resetDialogDefaultOptions;

Dialog.install = (app: App) => {
  app.use(Dialog.Component);
  app.config.globalProperties.$dialog = Dialog;
};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dialog: typeof Dialog;
  }
}
