import {
  Notify as VanNotify,
  showNotify,
  closeNotify,
  setNotifyDefaultOptions,
  resetNotifyDefaultOptions,
} from 'vant';
import type { App } from 'vue';

export const Notify = (...args: Parameters<typeof showNotify>) =>
  showNotify(...args);

Notify.clear = closeNotify;
Notify.Component = VanNotify;
Notify.setDefaultOptions = setNotifyDefaultOptions;
Notify.resetDefaultOptions = resetNotifyDefaultOptions;

Notify.install = (app: App) => {
  app.use(Notify.Component);
  app.config.globalProperties.$notify = Notify;
};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $notify: typeof Notify;
  }
}
