import { Toast } from './function-call';
import type { TeleportProps } from 'vue';
import type { LoadingType } from '../loading';

export type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
export type ToastPosition = 'top' | 'middle' | 'bottom';

export type ToastOptions = {
  icon?: string;
  type?: ToastType;
  mask?: boolean;
  message?: string | number;
  onClose?: () => void;
  onOpened?: () => void;
  overlay?: boolean;
  duration?: number;
  teleport?: TeleportProps['to'];
  iconSize?: number | string;
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

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: typeof Toast;
  }
}
