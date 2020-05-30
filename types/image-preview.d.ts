import { VanComponent } from './component';
import { VanPopupMixin } from './mixins/popup';

export type ImagePreviewOptions =
  | string[]
  | {
      loop?: boolean;
      images: string[];
      maxZoom?: number;
      minZoom?: number;
      className?: any;
      showIndex?: boolean;
      closeable?: boolean;
      closeIcon?: string;
      asyncClose?: boolean;
      swipeDuration?: number;
      startPosition?: number;
      showIndicators?: boolean;
      closeOnPopstate?: boolean;
      closeIconPosition?: string;
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
  Component: typeof VanComponent;
}

export const ImagePreview: ImagePreview;
