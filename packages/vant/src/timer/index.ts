import { withInstall } from '../utils';
import _Timer from './Timer';

export const Timer = withInstall(_Timer);
export default Timer;
export { timerProps } from './Timer';
export type { TimerProps } from './Timer';
export type { TimerInstance, TimerThemeVars, TimerCurrentTime } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanTimer: typeof Timer;
  }
}
