import _SkeletonImage from './SkeletonImage';
import { withInstall } from '../utils';

export const SkeletonImage = withInstall(_SkeletonImage);
export default SkeletonImage;

export { skeletonImageProps } from './SkeletonImage';
export type { SkeletonImageProps, SkeletonImageShape } from './SkeletonImage';

declare module 'vue' {
  export interface GlobalComponents {
    VanSkeletonImage: typeof SkeletonImage;
  }
}
