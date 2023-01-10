import { withInstall } from '../utils';
import _SkeletonAvatar from './SkeletonAvatar';

export const SkeletonAvatar = withInstall(_SkeletonAvatar);
export default SkeletonAvatar;

export { skeletonAvatarProps } from './SkeletonAvatar';
export type { SkeletonAvatarProps } from './SkeletonAvatar';

declare module 'vue' {
  export interface GlobalComponents {
    VanSkeletonAvatar: typeof SkeletonAvatar;
  }
}
