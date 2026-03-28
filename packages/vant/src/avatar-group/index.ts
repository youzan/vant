import { withInstall } from '../utils';
import _AvatarGroup from './AvatarGroup';

export const AvatarGroup = withInstall(_AvatarGroup);
export default AvatarGroup;
export { avatarGroupProps } from './AvatarGroup';
export type { AvatarGroupProps } from './AvatarGroup';
export type { AvatarGroupThemeVars, AvatarGroupCascadingValue } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanAvatarGroup: typeof AvatarGroup;
  }
}
