import type { CSSProperties, TeleportProps } from 'vue';
import type { Interceptor, Numeric } from '../utils';

export type DialogTheme = 'default' | 'round-button';
export type DialogAction = 'confirm' | 'cancel';
export type DialogMessage = string | (() => JSX.Element);
export type DialogMessageAlign = 'left' | 'center' | 'right' | 'justify';

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

export type DialogThemeVars = {
  dialogWidth?: string;
  dialogSmallScreenWidth?: string;
  dialogFontSize?: string;
  dialogTransition?: string;
  dialogRadius?: string;
  dialogBackground?: string;
  dialogHeaderFontWeight?: string;
  dialogHeaderLineHeight?: number | string;
  dialogHeaderPaddingTop?: string;
  dialogHeaderIsolatedPadding?: string;
  dialogMessagePadding?: string;
  dialogMessageFontSize?: string;
  dialogMessageLineHeight?: number | string;
  dialogMessageMaxHeight?: string;
  dialogHasTitleMessageTextColor?: string;
  dialogHasTitleMessagePaddingTop?: string;
  dialogButtonHeight?: string;
  dialogRoundButtonHeight?: string;
  dialogConfirmButtonTextColor?: string;
};
