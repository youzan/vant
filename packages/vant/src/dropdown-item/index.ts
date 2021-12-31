import { withInstall } from '../utils';
import _DropdownItem, { DropdownItemProps } from './DropdownItem';

export const DropdownItem = withInstall(_DropdownItem);
export default DropdownItem;
export type { DropdownItemProps };
export type { DropdownItemInstance, DropdownItemOption } from './types';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanDropdownItem: typeof DropdownItem;
  }
}
