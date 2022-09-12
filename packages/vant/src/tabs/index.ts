import { withInstall } from '../utils';
import _Tabs, { TabsProps } from './Tabs';

export const Tabs = withInstall(_Tabs);
export default Tabs;
export { tabsProps } from './Tabs';
export type { TabsProps };
export type { TabsType, TabsInstance, TabsThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanTabs: typeof Tabs;
  }
}
