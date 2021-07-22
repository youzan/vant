import { withInstall } from '../utils';
import _SidebarItem from './SidebarItem';

const SidebarItem = withInstall<typeof _SidebarItem>(_SidebarItem);

export default SidebarItem;
export { SidebarItem };
