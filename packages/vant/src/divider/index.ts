import { withInstall } from '../utils';
import _Divider from './Divider';

export const Divider = withInstall(_Divider);
export default Divider;
export type { DividerProps, DividerContentPosition } from './Divider';

declare module 'vue' {
  export interface GlobalComponents {
    VanDivider: typeof Divider;
  }
}
