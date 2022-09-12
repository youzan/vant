import type { ComponentPublicInstance, TeleportProps } from 'vue';
import type { LoadingType } from '../loading';
import type { Numeric } from '../utils';

export type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
export type ToastPosition = 'top' | 'middle' | 'bottom';

export type ToastOptions = {
  icon?: string;
  type?: ToastType;
  mask?: boolean;
  message?: Numeric;
  onClose?: () => void;
  onOpened?: () => void;
  overlay?: boolean;
  duration?: number;
  teleport?: TeleportProps['to'];
  iconSize?: Numeric;
  position?: ToastPosition;
  className?: unknown;
  transition?: string;
  iconPrefix?: string;
  loadingType?: LoadingType;
  forbidClick?: boolean;
  closeOnClick?: boolean;
  overlayClass?: unknown;
  overlayStyle?: Record<string, any>;
  closeOnClickOverlay?: boolean;
};

export type ToastWrapperInstance = ComponentPublicInstance<
  { message: Numeric },
  {
    close: () => void;
    /**
     * @private
     */
    open: (props: Record<string, any>) => void;
  }
>;

export type ToastThemeVars = {
  toastMaxWidth?: string;
  toastFontSize?: string;
  toastTextColor?: string;
  toastLoadingIconColor?: string;
  toastLineHeight?: number | string;
  toastRadius?: string;
  toastBackground?: string;
  toastIconSize?: string;
  toastTextMinWidth?: string;
  toastTextPadding?: string;
  toastDefaultPadding?: string;
  toastDefaultWidth?: string;
  toastDefaultMinHeight?: string;
  toastPositionTopDistance?: string;
  toastPositionBottomDistance?: string;
};
