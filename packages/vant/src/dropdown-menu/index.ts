import { withInstall } from '../utils';
import _DropdownMenu, { DropdownMenuProps } from './DropdownMenu';

export const DropdownMenu = withInstall(_DropdownMenu);
export default DropdownMenu;
export { dropdownMenuProps } from './DropdownMenu';
export type { DropdownMenuProps };
export type {
  DropdownMenuInstance,
  DropdownMenuDirection,
  DropdownMenuThemeVars,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanDropdownMenu: typeof DropdownMenu;
  }
}
