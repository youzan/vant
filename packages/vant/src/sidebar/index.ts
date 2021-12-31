import { withInstall } from '../utils';
import _Sidebar from './Sidebar';

export const Sidebar = withInstall(_Sidebar);
export default Sidebar;
export type { SidebarProps } from './Sidebar';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanSidebar: typeof Sidebar;
  }
}
