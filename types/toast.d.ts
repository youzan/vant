import Vue from 'vue';
import { VanPopupMixin } from './mixins/popup';

type ToastMessage = string | number;

export type ToastOptions = {
  icon?: string;
  type?: string;
  mask?: boolean;
  message?: ToastMessage;
  onClose?: () => void;
  onOpened?: () => void;
  overlay?: boolean;
  duration?: number;
  position?: string;
  className?: any;
  transition?: string;
  loadingType?: string;
  forbidClick?: boolean;
  closeOnClick?: boolean;
  closeOnClickOverlay?: boolean;
  getContainer?: string | (() => Element);
};

export interface VanToast extends Vue, VanPopupMixin {
  type: string;
  position: string;
  loadingType: string;
  forbidClick: boolean;
  message: ToastMessage;
  clear(): void;
}

export interface Toast {
  (message: ToastOptions | ToastMessage, options?: ToastOptions): VanToast;
  loading(options?: ToastOptions | ToastMessage): VanToast;
  success(options?: ToastOptions | ToastMessage): VanToast;
  fail(options?: ToastOptions | ToastMessage): VanToast;
  clear(all?: boolean): void;
  install(): void;
  setDefaultOptions(options: ToastOptions): void;
  resetDefaultOptions(): void;
  allowMultiple(allow: boolean): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: Toast;
  }
}

export const Toast: Toast;
