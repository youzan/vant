import { withInstall } from '../utils';
import _NavBar from './NavBar';

export const NavBar = withInstall(_NavBar);
export default NavBar;
export { navBarProps } from './NavBar';
export type { NavBarProps } from './NavBar';
export type { NavBarThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanNavBar: typeof NavBar;
  }
}
