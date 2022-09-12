import { withInstall } from '../utils';
import _ActionBar from './ActionBar';

export const ActionBar = withInstall(_ActionBar);
export default ActionBar;
export { actionBarProps } from './ActionBar';
export type { ActionBarProps } from './ActionBar';
export type { ActionBarThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanActionBar: typeof ActionBar;
  }
}
