import { VanPopupMixin } from './mixins/popup';

export type ImagePreviewOptions =
  | string[]
  | {
      loop?: boolean;
      images: string[];
      maxZoom?: number;
      minZoom?: number;
      className?: any;
      lazyLoad?: boolean;
      showIndex?: boolean;
      asyncClose?: boolean;
      swipeDuration?: number;
      startPosition?: number;
      showIndicators?: boolean;
      closeOnPopstate?: boolean;
      onClose?: () => void;
      onChange?: (index: number) => void;
    };

export class VanImagePreview extends VanPopupMixin {
  images: string[];

  showIndex: boolean;

  startPosition: number;
}

export interface ImagePreview {
  (options: ImagePreviewOptions, startPosition?: number): VanImagePreview;
  install(): void;
}

export const ImagePreview: ImagePreview;
