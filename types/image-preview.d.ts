import { VanPopupMixin } from './mixins/popup';

export type ImagePreviewOptions = string[] | {
  images: string[];
  startPosition?: number;
  showIndex?: boolean;
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
