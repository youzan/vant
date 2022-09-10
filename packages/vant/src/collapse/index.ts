import { withInstall } from '../utils';
import _Collapse from './Collapse';

export const Collapse = withInstall(_Collapse);
export default Collapse;
export { collapseProps } from './Collapse';
export type {
  CollapseProps,
  CollapseInstance,
  CollapseToggleAllOptions,
} from './Collapse';

declare module 'vue' {
  export interface GlobalComponents {
    VanCollapse: typeof Collapse;
  }
}
