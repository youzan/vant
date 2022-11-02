import _Skeleton from './Skeleton';
import _SkeletonImage from './Image';
import _SkeletonTitle from './Title';
import _SkeletonAvatar from './Avatar';
import _SkeletonParagraph from './Paragraph';

import { withInstall } from '../utils';

export const Skeleton = withInstall(_Skeleton);
const SkeletonImage = withInstall(_SkeletonImage);
const SkeletonTitle = withInstall(_SkeletonTitle);
const SkeletonAvatar = withInstall(_SkeletonAvatar);
const SkeletonParagraph = withInstall(_SkeletonParagraph);

Skeleton.Image = SkeletonImage;
Skeleton.Title = SkeletonTitle;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Paragraph = SkeletonParagraph;

export default Skeleton;

export { skeletonProps } from './Skeleton';
export type { SkeletonProps } from './Skeleton';
export { skeletonImageProps } from './Image';
export type { SkeletonImageProps, SkeletonImageShape } from './Image';
export { skeletonAvatarProps } from './Avatar';
export type { SkeletonAvatarProps, SkeletonAvatarShape } from './Avatar';
export { skeletonParagraphProps } from './Paragraph';
export type { SkeletonParagraphProps } from './Paragraph';
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
