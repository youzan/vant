import { withInstall } from '../utils';
import _SubmitBar from './SubmitBar';

export const SubmitBar = withInstall(_SubmitBar);
export default SubmitBar;
export { submitBarProps } from './SubmitBar';
export type { SubmitBarProps, SubmitBarTextAlign } from './SubmitBar';
export type { SubmitBarThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanSubmitBar: typeof SubmitBar;
  }
}
