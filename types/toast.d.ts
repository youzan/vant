export type ToastOptions = {
  type?: string;
  mask?: boolean;
  message?: string;
  position?: string;
  duration?: number;
  forbidClick?: boolean;
}

export interface Toast {
  (message: ToastOptions | string, options?: ToastOptions): void;
  loading(options?: ToastOptions | string): void;
  success(options?: ToastOptions | string): void;
  fail(options?: ToastOptions | string): void;
  clear(): void;
  install(): void;
  setDefaultOptions(options: ToastOptions): void;
  resetDefaultOptions(): void;
  allowMultiple(allow: boolean): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: Toast
  }
}

export const Toast: Toast;
