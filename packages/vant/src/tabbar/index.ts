import { withInstall } from '../utils';
import _Tabbar from './Tabbar';

export const Tabbar = withInstall(_Tabbar);
export default Tabbar;
export { tabbarProps } from './Tabbar';
export type { TabbarProps } from './Tabbar';
export type { TabbarThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanTabbar: typeof Tabbar;
  }
}
