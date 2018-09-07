import { VanPopupMixin } from './mixins/popup';

export type ImagePreviewOptions = string[] | {
  images: string[];
  startPosition?: number;
  onClose?: () => any;
};

export class VanImagePreview extends VanPopupMixin {
  images: string[];
  startPosition: number;
}

export interface ImagePreview {
  (options: ImagePreviewOptions, startPosition?: number): VanImagePreview;
  install(): void;
}

export const ImagePreview: ImagePreview;
