import { withInstall } from '../utils';
import _ActionBarIcon from './ActionBarIcon';

export const ActionBarIcon = withInstall(_ActionBarIcon);
export default ActionBarIcon;
export type { ActionBarIconProps } from './ActionBarIcon';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanActionBarIcon: typeof ActionBarIcon;
  }
}
