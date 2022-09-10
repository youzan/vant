import { withInstall } from '../utils';
import _Row from './Row';

export const Row = withInstall(_Row);
export default Row;
export { rowProps } from './Row';
export type { RowProps, RowAlign, RowJustify } from './Row';

declare module 'vue' {
  export interface GlobalComponents {
    VanRow: typeof Row;
  }
}
