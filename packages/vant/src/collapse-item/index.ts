import { withInstall } from '../utils';
import _CollapseItem from './CollapseItem';

export const CollapseItem = withInstall(_CollapseItem);
export default CollapseItem;
export { collapseItemProps } from './CollapseItem';
export type { CollapseItemProps } from './CollapseItem';
export type { CollapseItemInstance, CollapseItemThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanCollapseItem: typeof CollapseItem;
  }
}
