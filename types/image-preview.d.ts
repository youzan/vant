import { VanPopupMixin } from './mixins/popup';

export type ImagePreviewOptions = string[] | {
  loop?: boolean;
  images: string[];
  className?: any;
  startPosition?: number;
  lazyLoad?: boolean;
  showIndex?: boolean;
  asyncClose?: boolean;
  showIndicators?: boolean;
  onClose?: () => any;
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
