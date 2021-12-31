import { withInstall } from '../utils';
import _GridItem from './GridItem';

export const GridItem = withInstall(_GridItem);
export default GridItem;
export type { GridItemProps } from './GridItem';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanGridItem: typeof GridItem;
  }
}
