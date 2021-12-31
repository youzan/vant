import { withInstall } from '../utils';
import _Swipe, { SwipeProps } from './Swipe';

export const Swipe = withInstall(_Swipe);
export default Swipe;
export type { SwipeProps };
export type { SwipeInstance, SwipeToOptions } from './types';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanSwipe: typeof Swipe;
  }
}
