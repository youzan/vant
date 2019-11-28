import Vue from 'vue';
import { VanPopupMixin } from './mixins/popup';

type ToastMessage = string | number;
type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
type ToastPosition = 'top' | 'middle' | 'bottom';
type ToastLoadingType = 'circular' | 'spinner';

export type ToastOptions = {
  icon?: string;
  type?: ToastType;
  mask?: boolean;
  message?: ToastMessage;
  onClose?: () => void;
  onOpened?: () => void;
  overlay?: boolean;
  duration?: number;
  position?: ToastPosition;
  className?: any;
  transition?: string;
  loadingType?: ToastLoadingType;
  forbidClick?: boolean;
  closeOnClick?: boolean;
  closeOnClickOverlay?: boolean;
  getContainer?: string | (() => Element);
};

export interface VanToast extends Vue, VanPopupMixin {
  type: ToastType;
  position: ToastPosition;
  loadingType: ToastLoadingType;
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
  setDefaultOptions(options: string | ToastOptions): void;
  resetDefaultOptions(options?: string): void;
  allowMultiple(allow: boolean): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: Toast;
  }
}

export const Toast: Toast;
