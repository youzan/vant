import { withInstall } from '../utils';
import _Collapse from './Collapse';

export const Collapse = withInstall(_Collapse);
export default Collapse;
export type { CollapseProps } from './Collapse';

declare module 'vue' {
  export interface GlobalComponents {
    VanCollapse: typeof Collapse;
  }
}
