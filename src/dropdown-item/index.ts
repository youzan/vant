import { withInstall } from '../utils';
import _DropdownItem from './DropdownItem';

const DropdownItem = withInstall<typeof _DropdownItem>(_DropdownItem);

export default DropdownItem;
export { DropdownItem };
export type { DropdownItemInstance, DropdownItemOption } from './types';
