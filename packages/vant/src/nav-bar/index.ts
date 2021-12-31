import { withInstall } from '../utils';
import _NavBar from './NavBar';

export const NavBar = withInstall(_NavBar);
export default NavBar;
export type { NavBarProps } from './NavBar';

declare module 'vue' {
  export interface GlobalComponents {
    VanNavBar: typeof NavBar;
  }
}
