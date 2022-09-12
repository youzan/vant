import { withInstall } from '../utils';
import _CountDown from './CountDown';

export const CountDown = withInstall(_CountDown);
export default CountDown;
export { countDownProps } from './CountDown';
export type { CountDownProps } from './CountDown';
export type {
  CountDownInstance,
  CountDownThemeVars,
  CountDownCurrentTime,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanCountDown: typeof CountDown;
  }
}
