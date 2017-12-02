import { VanPopupMixin } from './mixins/popup';

export class VanImagePreview extends VanPopupMixin {
  images: string[];
  startPosition: number;
}

export interface ImagePreview {
  (images: string[], startPosition?: number): VanImagePreview;
}

export const ImagePreview: ImagePreview;
