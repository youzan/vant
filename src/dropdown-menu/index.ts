import { withInstall } from '../utils';
import _DropdownMenu from './DropdownMenu';

const DropdownMenu = withInstall<typeof _DropdownMenu>(_DropdownMenu);

export default DropdownMenu;
export { DropdownMenu };
export type { DropdownMenuDirection } from './types';
