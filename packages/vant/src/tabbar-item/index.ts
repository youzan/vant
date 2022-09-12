import { withInstall } from '../utils';
import _TabbarItem from './TabbarItem';

export const TabbarItem = withInstall(_TabbarItem);
export default TabbarItem;
export { tabbarItemProps } from './TabbarItem';
export type { TabbarItemProps } from './TabbarItem';
export type { TabbarItemThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanTabbarItem: typeof TabbarItem;
  }
}
