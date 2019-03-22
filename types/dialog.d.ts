type DialogAction = 'confirm' | 'cancel';
type DialogDone = (close?: boolean) => void;

export type DialogOptions = {
  title?: string;
  message?: string;
  overlay?: boolean;
  className?: any;
  lockScroll?: boolean;
  messageAlign?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  closeOnClickOverlay?: boolean;
  getContainer?: string | (() => HTMLElement);
  beforeClose?: (action: DialogAction, done: DialogDone) => void;
};

export interface Dialog {
  (options: DialogOptions): Promise<DialogAction>;
  alert(options: DialogOptions): Promise<DialogAction>;
  confirm(options: DialogOptions): Promise<DialogAction>;
  close(): void;
  install(): void;
  setDefaultOptions(options: DialogOptions): void;
  resetDefaultOptions(): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $dialog: Dialog;
  }
}

export const Dialog: Dialog;
