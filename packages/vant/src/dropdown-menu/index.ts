import { withInstall } from '../utils';
import _DropdownMenu, { DropdownMenuProps } from './DropdownMenu';

export const DropdownMenu = withInstall(_DropdownMenu);
export default DropdownMenu;
export type { DropdownMenuProps };
export type { DropdownMenuDirection } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanDropdownMenu: typeof DropdownMenu;
  }
}
