import { ImagePreview } from './function-call';
import type { ImagePreviewProps } from './ImagePreview';

export default ImagePreview;
export { ImagePreview };
export type { ImagePreviewProps };
export type {
  ImagePreviewOptions,
  ImagePreviewInstance,
  ImagePreviewScaleEventParams,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanImagePreview: typeof ImagePreview.Component;
  }
}
