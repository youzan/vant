import { withInstall } from '../utils';
import _Sidebar from './Sidebar';

export const Sidebar = withInstall(_Sidebar);
export default Sidebar;
export { sidebarProps } from './Sidebar';
export type { SidebarProps } from './Sidebar';
export type { SidebarThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanSidebar: typeof Sidebar;
  }
}
