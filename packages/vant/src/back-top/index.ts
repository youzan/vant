import { withInstall } from '../utils';
import _BackTop from './BackTop';

export const BackTop = withInstall(_BackTop);
export default BackTop;
export { backTopProps } from './BackTop';

export type { BackTopProps } from './BackTop';
export type { BackTopThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanBackTop: typeof BackTop;
  }
}
