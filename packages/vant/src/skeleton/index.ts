import _Skeleton from './Skeleton';
import _SkeletonImage from './Image';
import _SkeletonTitle from './Title';
import _SkeletonAvatar from './Avatar';
import _SkeletonParagraph from './Paragraph';

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
export { skeletonImageProps } from './Image';
export type { SkeletonImageProps, SkeletonImageShape } from './Image';

// SkeletonAvatar
export { skeletonAvatarProps } from './Avatar';
export type { SkeletonAvatarProps, SkeletonAvatarShape } from './Avatar';

// SkeletonParagraph
export { skeletonParagraphProps } from './Paragraph';
export type { SkeletonParagraphProps } from './Paragraph';

// SkeletonTitle
export { skeletonTitleProps } from './Title';
export type { SkeletonTitleProps } from './Title';

export type { SkeletonThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanSkeleton: typeof Skeleton;
    VanSkeletonImage: typeof SkeletonImage;
    VanSkeletonTitle: typeof SkeletonTitle;
    VanSkeletonAvatar: typeof SkeletonAvatar;
    VanSkeletonParagraph: typeof SkeletonParagraph;
  }
}
