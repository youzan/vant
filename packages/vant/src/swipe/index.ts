import { withInstall } from '../utils';
import _Swipe, { SwipeProps } from './Swipe';

export const Swipe = withInstall(_Swipe);
export default Swipe;
export { swipeProps } from './Swipe';
export type { SwipeProps };
export type { SwipeInstance, SwipeToOptions, SwipeThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanSwipe: typeof Swipe;
  }
}
