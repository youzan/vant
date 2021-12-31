import { withInstall } from '../utils';
import _CellGroup from './CellGroup';

export const CellGroup = withInstall(_CellGroup);
export default CellGroup;
export type { CellGroupProps } from './CellGroup';

declare module 'vue' {
  export interface GlobalComponents {
    VanCellGroup: typeof CellGroup;
  }
}
