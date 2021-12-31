import { withInstall } from '../utils';
import _Cell from './Cell';

export const Cell = withInstall(_Cell);
export default Cell;
export type { CellSize, CellProps, CellArrowDirection } from './Cell';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanCell: typeof Cell;
  }
}
