import { withInstall } from '../utils';
import _TreeSelect from './TreeSelect';

export const TreeSelect = withInstall(_TreeSelect);
export default TreeSelect;
export type {
  TreeSelectItem,
  TreeSelectChild,
  TreeSelectProps,
} from './TreeSelect';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanTreeSelect: typeof TreeSelect;
  }
}
