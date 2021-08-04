import { withInstall } from '../utils';
import _SwipeCell from './SwipeCell';

const SwipeCell = withInstall<typeof _SwipeCell>(_SwipeCell);

export default SwipeCell;
export { SwipeCell };
export type {
  SwipeCellSide,
  SwipeCellPosition,
  SwipeCellInstance,
} from './types';
