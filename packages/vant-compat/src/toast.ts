import {
  showToast,
  closeToast,
  showFailToast,
  showSuccessToast,
  allowMultipleToast,
  setToastDefaultOptions,
  resetToastDefaultOptions,
} from 'vant';
import type { App } from 'vue';

export const Toast = (...args: Parameters<typeof showToast>) => {
  const toast = showToast(...args);
  return {
    clear: toast.close,
    ...toast,
  };
};

Toast.fail = (...args: Parameters<typeof showFailToast>) => {
  const toast = showFailToast(...args);
  return {
    clear: toast.close,
    ...toast,
  };
};

Toast.success = (...args: Parameters<typeof showSuccessToast>) => {
  const toast = showSuccessToast(...args);
  return {
    clear: toast.close,
    ...toast,
  };
};

Toast.clear = closeToast;
Toast.allowMultiple = allowMultipleToast;
Toast.setDefaultOptions = setToastDefaultOptions;
Toast.resetDefaultOptions = resetToastDefaultOptions;

Toast.install = (app: App) => {
  app.config.globalProperties.$toast = Toast;
};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: typeof Toast;
  }
}
