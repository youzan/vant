import { withInstall } from '../utils';
import _CellGroup from './CellGroup';

export const CellGroup = withInstall(_CellGroup);
export default CellGroup;
export type { CellGroupProps } from './CellGroup';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanCellGroup: typeof CellGroup;
  }
}
