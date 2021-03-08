import { withInstall } from '../utils';
import _NavBar from './NavBar';

const NavBar = withInstall<typeof _NavBar>(_NavBar);

export default NavBar;
export { NavBar };
