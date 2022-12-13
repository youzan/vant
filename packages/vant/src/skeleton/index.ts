import _Skeleton from './Skeleton';
import _SkeletonImage from './SkeletonImage';
import _SkeletonTitle from './SkeletonTitle';
import _SkeletonAvatar from './SkeletonAvatar';
import _SkeletonParagraph from './SkeletonParagraph';

import { withInstall } from '../utils';

export const SkeletonImage = withInstall(_SkeletonImage);
export const SkeletonTitle = withInstall(_SkeletonTitle);
export const SkeletonAvatar = withInstall(_SkeletonAvatar);
export const SkeletonParagraph = withInstall(_SkeletonParagraph);
export const Skeleton = withInstall(_Skeleton);

export default Skeleton;

// Skeleton
export { skeletonProps } from './Skeleton';
export type { SkeletonProps } from './Skeleton';

// SkeletonImage
export { skeletonImageProps } from './SkeletonImage';
export type { SkeletonImageProps } from './SkeletonImage';

// SkeletonAvatar
export { skeletonAvatarProps } from './SkeletonAvatar';
export type { SkeletonAvatarProps } from './SkeletonAvatar';

// SkeletonParagraph
export { skeletonParagraphProps } from './SkeletonParagraph';
export type { SkeletonParagraphProps } from './SkeletonParagraph';

// SkeletonTitle
export { skeletonTitleProps } from './SkeletonTitle';
export type { SkeletonTitleProps } from './SkeletonTitle';

export type {
  SkeletonThemeVars,
  SkeletonImageShape,
  SkeletonAvatarShape,
} from './types';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VanSkeleton: typeof Skeleton;
    VanSkeletonImage: typeof SkeletonImage;
    VanSkeletonTitle: typeof SkeletonTitle;
    VanSkeletonAvatar: typeof SkeletonAvatar;
    VanSkeletonParagraph: typeof SkeletonParagraph;
  }
}
