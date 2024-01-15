import type {
  CSSProperties,
  TeleportProps,
  ComponentPublicInstance,
} from 'vue';
import type { Interceptor } from '../utils';
import type { SwipeToOptions } from '../swipe';
import type { PopupCloseIconPosition } from '../popup';
import type { ImagePreviewProps } from './ImagePreview';
import type { ImagePreviewItemProps } from './ImagePreviewItem';

export type ImagePreviewOptions = {
  loop?: boolean;
  images: string[];
  maxZoom?: number;
  minZoom?: number;
  teleport?: TeleportProps['to'];
  className?: unknown;
  showIndex?: boolean;
  closeable?: boolean;
  closeIcon?: string;
  transition?: string;
  beforeClose?: Interceptor;
  doubleScale?: boolean;
  overlayStyle?: CSSProperties;
  overlayClass?: unknown;
  swipeDuration?: number;
  startPosition?: number;
  showIndicators?: boolean;
  closeOnPopstate?: boolean;
  closeIconPosition?: PopupCloseIconPosition;
  closeOnClickImage?: boolean;
  closeOnClickOverlay?: boolean;
  onClose?(): void;
  onScale?(args: { scale: number; index: number }): void;
  onChange?(index: number): void;
};

export type ImagePreviewScaleEventParams = {
  scale: number;
  index: number;
};

type ImagePreviewItemExpose = {
  resetScale: () => void;
};

export type ImagePreviewItemInstance = ComponentPublicInstance<
  ImagePreviewItemProps,
  ImagePreviewItemExpose
>;

export type ImagePreviewExpose = {
  resetScale: () => void;
  swipeTo: (index: number, options?: SwipeToOptions) => void;
};

export type ImagePreviewInstance = ComponentPublicInstance<
  ImagePreviewProps,
  ImagePreviewExpose
>;

export type ImagePreviewThemeVars = {
  imagePreviewIndexTextColor?: string;
  imagePreviewIndexFontSize?: string;
  imagePreviewIndexLineHeight?: number | string;
  imagePreviewIndexTextShadow?: string;
  imagePreviewOverlayBackground?: string;
  imagePreviewCloseIconSize?: string;
  imagePreviewCloseIconColor?: string;
  imagePreviewCloseIconMargin?: string;
  imagePreviewCloseIconZIndex?: number | string;
};
