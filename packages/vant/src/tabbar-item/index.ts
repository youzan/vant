import { withInstall } from '../utils';
import _TabbarItem from './TabbarItem';

export const TabbarItem = withInstall(_TabbarItem);
export default TabbarItem;
export type { TabbarItemProps } from './TabbarItem';

declare module 'vue' {
  export interface GlobalComponents {
    VanTabbarItem: typeof TabbarItem;
  }
}
