import { withInstall } from '../utils';
import _ActionBar from './ActionBar';

export const ActionBar = withInstall(_ActionBar);
export default ActionBar;
export type { ActionBarProps } from './ActionBar';

declare module 'vue' {
  export interface GlobalComponents {
    VanActionBar: typeof ActionBar;
  }
}
