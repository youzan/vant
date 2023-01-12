import _Skeleton from './Skeleton';
import _SkeletonTitle from './SkeletonTitle';
import _SkeletonParagraph from './SkeletonParagraph';

import { withInstall } from '../utils';

export const SkeletonTitle = withInstall(_SkeletonTitle);
export const SkeletonParagraph = withInstall(_SkeletonParagraph);
export const Skeleton = withInstall(_Skeleton);

export default Skeleton;

// Skeleton
export { skeletonProps } from './Skeleton';
export type { SkeletonProps } from './Skeleton';

// SkeletonParagraph
export { skeletonParagraphProps } from './SkeletonParagraph';
export type { SkeletonParagraphProps } from './SkeletonParagraph';

// SkeletonTitle
export { skeletonTitleProps } from './SkeletonTitle';
export type { SkeletonTitleProps } from './SkeletonTitle';

export type { SkeletonThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanSkeleton: typeof Skeleton;
    VanSkeletonTitle: typeof SkeletonTitle;
    VanSkeletonParagraph: typeof SkeletonParagraph;
  }
}
