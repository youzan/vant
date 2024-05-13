import { withInstall } from '../utils';
import _ImageCrop from './ImageCrop';

export const ImageCrop = withInstall(_ImageCrop);
export default ImageCrop;

export { imageCropProps } from './ImageCrop';
export type {
  ImageCropTouchPoint,
  ImageCropSize,
  ImageCropRectArea,
  ImageCropState,
  ImageCropExpose,
  ImageCropInstance,
  ImageCropThemeVars,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanImageCrop: typeof ImageCrop;
  }
}
