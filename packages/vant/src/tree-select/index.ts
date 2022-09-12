import { withInstall } from '../utils';
import _TreeSelect from './TreeSelect';

export const TreeSelect = withInstall(_TreeSelect);
export default TreeSelect;
export { treeSelectProps } from './TreeSelect';
export type {
  TreeSelectItem,
  TreeSelectChild,
  TreeSelectProps,
} from './TreeSelect';
export type { TreeSelectThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanTreeSelect: typeof TreeSelect;
  }
}
