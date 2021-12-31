import { withInstall } from '../utils';
import _TreeSelect from './TreeSelect';

export const TreeSelect = withInstall(_TreeSelect);
export default TreeSelect;
export type {
  TreeSelectItem,
  TreeSelectChild,
  TreeSelectProps,
} from './TreeSelect';

declare module 'vue' {
  export interface GlobalComponents {
    VanTreeSelect: typeof TreeSelect;
  }
}
