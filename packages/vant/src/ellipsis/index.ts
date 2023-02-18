import { withInstall } from '../utils';
import _Ellipsis from './Ellipsis';

export const Ellipsis = withInstall(_Ellipsis);
export default Ellipsis;
export { ellipsisProps } from './Ellipsis';

export type { EllipsisProps } from './Ellipsis';
export type { EllipsisThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanEllipsis: typeof Ellipsis;
  }
}
