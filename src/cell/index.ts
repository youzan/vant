import { withInstall } from '../utils';
import _Cell from './Cell';

const Cell = withInstall<typeof _Cell>(_Cell);

export default Cell;
export { Cell };
export type { CellArrowDirection } from './Cell';
