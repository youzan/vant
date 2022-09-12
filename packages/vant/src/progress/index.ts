import { withInstall } from '../utils';
import _Progress, { ProgressProps } from './Progress';

export const Progress = withInstall(_Progress);
export default Progress;
export { progressProps } from './Progress';
export type { ProgressProps };
export type { ProgressInstance, ProgressThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanProgress: typeof Progress;
  }
}
