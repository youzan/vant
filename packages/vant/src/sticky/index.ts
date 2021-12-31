import { withInstall } from '../utils';
import _Sticky from './Sticky';

export const Sticky = withInstall(_Sticky);
export default Sticky;
export type { StickyProps, StickyPosition } from './Sticky';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanSticky: typeof Sticky;
  }
}
