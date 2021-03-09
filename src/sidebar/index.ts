import { withInstall } from '../utils';
import _Sidebar from './Sidebar';

const Sidebar = withInstall<typeof _Sidebar>(_Sidebar);

export default Sidebar;
export { Sidebar };
