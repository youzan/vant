import Vue from 'vue';
import { VanPopupMixin } from './mixins/popup';

type ToastMessage = string | number;

export type ToastOptions = {
  type?: string;
  mask?: boolean;
  position?: string;
  duration?: number;
  forbidClick?: boolean;
  message?: ToastMessage;
}

export interface VanToast extends Vue, VanPopupMixin {
  type: string;
  position: string;
  loadingType: string;
  forbidClick: boolean;
  message: ToastMessage;
}

export interface Toast {
  (message: ToastOptions | ToastMessage, options?: ToastOptions): VanToast;
  loading(options?: ToastOptions | ToastMessage): VanToast;
  success(options?: ToastOptions | ToastMessage): VanToast;
  fail(options?: ToastOptions | ToastMessage): VanToast;
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
