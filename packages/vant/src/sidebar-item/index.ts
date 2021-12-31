import { withInstall } from '../utils';
import _SidebarItem from './SidebarItem';

export const SidebarItem = withInstall(_SidebarItem);
export default SidebarItem;
export type { SidebarItemProps } from './SidebarItem';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanSidebarItem: typeof SidebarItem;
  }
}
