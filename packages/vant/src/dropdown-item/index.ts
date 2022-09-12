import { withInstall } from '../utils';
import _DropdownItem, { DropdownItemProps } from './DropdownItem';

export const DropdownItem = withInstall(_DropdownItem);
export default DropdownItem;
export { dropdownItemProps } from './DropdownItem';
export type { DropdownItemProps };
export type {
  DropdownItemOption,
  DropdownItemInstance,
  DropdownItemThemeVars,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanDropdownItem: typeof DropdownItem;
  }
}
