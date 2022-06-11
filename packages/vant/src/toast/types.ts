import { Toast } from './function-call';
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

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: typeof Toast;
  }
}

export type ToastWrapperInstance = ComponentPublicInstance<
  { message: Numeric },
  {
    clear: () => void;
    /**
     * @private
     */
    open: (props: Record<string, any>) => void;
  }
>;
