import { withInstall } from '../utils';
import _Steps from './Steps';

export const Steps = withInstall(_Steps);
export default Steps;
export type { StepsProps, StepsDirection } from './Steps';

declare module 'vue' {
  export interface GlobalComponents {
    VanSteps: typeof Steps;
  }
}
