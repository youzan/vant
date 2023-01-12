import _Skeleton from './Skeleton';
import _SkeletonTitle from './SkeletonTitle';

import { withInstall } from '../utils';

export const SkeletonTitle = withInstall(_SkeletonTitle);
export const Skeleton = withInstall(_Skeleton);

export default Skeleton;

// Skeleton
export { skeletonProps } from './Skeleton';
export type { SkeletonProps } from './Skeleton';

// SkeletonTitle
export { skeletonTitleProps } from './SkeletonTitle';
export type { SkeletonTitleProps } from './SkeletonTitle';

export type { SkeletonThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanSkeleton: typeof Skeleton;
    VanSkeletonTitle: typeof SkeletonTitle;
  }
}
