import { Dialog } from './function-call';
import type { CSSProperties, TeleportProps } from 'vue';
import type { Interceptor, Numeric } from '../utils';

export type DialogTheme = 'default' | 'round-button';
export type DialogAction = 'confirm' | 'cancel';
export type DialogMessage = string | (() => JSX.Element);
export type DialogMessageAlign = 'left' | 'center' | 'right';

export type DialogOptions = {
  title?: string;
  width?: Numeric;
  theme?: DialogTheme;
  message?: DialogMessage;
  overlay?: boolean;
  teleport?: TeleportProps['to'];
  className?: unknown;
  allowHtml?: boolean;
  lockScroll?: boolean;
  transition?: string;
  beforeClose?: Interceptor;
  messageAlign?: DialogMessageAlign;
  overlayClass?: string;
  overlayStyle?: CSSProperties;
  closeOnPopstate?: boolean;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  cancelButtonText?: string;
  cancelButtonColor?: string;
  cancelButtonDisabled?: boolean;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  confirmButtonDisabled?: boolean;
  closeOnClickOverlay?: boolean;
};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dialog: typeof Dialog;
  }
}
