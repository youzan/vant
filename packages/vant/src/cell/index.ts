import { withInstall } from '../utils';
import _Cell from './Cell';

export const Cell = withInstall(_Cell);
export default Cell;
export { cellProps } from './Cell';
export type { CellSize, CellProps, CellArrowDirection } from './Cell';
export type { CellThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanCell: typeof Cell;
  }
}
