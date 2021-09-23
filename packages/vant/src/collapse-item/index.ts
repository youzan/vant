import { withInstall } from '../utils';
import _CollapseItem, { CollapseItemProps } from './CollapseItem';

export const CollapseItem = withInstall(_CollapseItem);
export default CollapseItem;
export type { CollapseItemProps };
export type { CollapseItemInstance } from './types';
