import { withInstall } from '../utils';
import _Steps from './Steps';

export const Steps = withInstall(_Steps);
export default Steps;
export { stepsProps } from './Steps';
export type { StepsProps, StepsDirection } from './Steps';
export type { StepsThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanSteps: typeof Steps;
  }
}
