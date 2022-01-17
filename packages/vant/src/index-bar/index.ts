import { withInstall } from '../utils';
import _IndexBar, { IndexBarProps } from './IndexBar';

export const IndexBar = withInstall(_IndexBar);
export default IndexBar;
export type { IndexBarProps };
export type { IndexBarInstance } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanIndexBar: typeof IndexBar;
  }
}
