import { withInstall } from '../utils';
import _SwipeItem from './SwipeItem';

export const SwipeItem = withInstall(_SwipeItem);
export default SwipeItem;

declare module 'vue' {
  export interface GlobalComponents {
    VanSwipeItem: typeof SwipeItem;
  }
}
