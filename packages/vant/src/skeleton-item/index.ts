import { withInstall } from '../utils';
import _SkeletonItem from './SkeletonItem';

export const SkeletonItem = withInstall(_SkeletonItem);
export default SkeletonItem;
export {
  skeletonItemProps,
  DEFAULT_ROW_WIDTH,
  skeletonCommonProps,
} from './SkeletonItem';
export type {
  SkeletonItemType,
  SkeletonItemProps,
  SkeletonAvatarShape,
} from './SkeletonItem';

declare module 'vue' {
  export interface GlobalComponents {
    VanSkeletonItem: typeof SkeletonItem;
  }
}
