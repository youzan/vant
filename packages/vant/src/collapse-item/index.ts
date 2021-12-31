import { withInstall } from '../utils';
import _CollapseItem from './CollapseItem';

export const CollapseItem = withInstall(_CollapseItem);
export default CollapseItem;
export type { CollapseItemProps } from './CollapseItem';
export type { CollapseItemInstance } from './types';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanCollapseItem: typeof CollapseItem;
  }
}
