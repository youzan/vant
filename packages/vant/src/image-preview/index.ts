import { withInstall } from '../utils';
import _ImagePreview from './ImagePreview';
import type { ImagePreviewProps } from './ImagePreview';

export const ImagePreview = withInstall(_ImagePreview);
export default ImagePreview;
export { imagePreviewProps } from './ImagePreview';
export { showImagePreview } from './function-call';

export type { ImagePreviewProps };
export type {
  ImagePreviewOptions,
  ImagePreviewInstance,
  ImagePreviewThemeVars,
  ImagePreviewScaleEventParams,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanImagePreview: typeof ImagePreview;
  }
}
