import { VanComponent } from './component';

type DialogAction = 'confirm' | 'cancel';
type DialogDone = (close?: boolean) => void;

export type DialogOptions = {
  title?: string;
  width?: string | number;
  message?: string;
  theme?: string;
  overlay?: boolean;
  className?: any;
  allowHtml?: boolean;
  lockScroll?: boolean;
  transition?: string;
  messageAlign?: string;
  overlayClass?: string;
  overlayStyle?: Record<string, any>;
  closeOnPopstate?: boolean;
  cancelButtonText?: string;
  cancelButtonColor?: string;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  closeOnClickOverlay?: boolean;
  getContainer?: string | (() => Element);
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
  Component: typeof VanComponent;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dialog: Dialog;
  }
}

export const Dialog: Dialog;
