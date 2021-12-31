import { withInstall } from '../utils';
import _ActionBarIcon from './ActionBarIcon';

export const ActionBarIcon = withInstall(_ActionBarIcon);
export default ActionBarIcon;
export type { ActionBarIconProps } from './ActionBarIcon';

declare module 'vue' {
  export interface GlobalComponents {
    VanActionBarIcon: typeof ActionBarIcon;
  }
}
