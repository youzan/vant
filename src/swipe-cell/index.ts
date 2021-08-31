import { withInstall } from '../utils';
import _SwipeCell from './SwipeCell';

export const SwipeCell = withInstall(_SwipeCell);
export default SwipeCell;
export type {
  SwipeCellSide,
  SwipeCellPosition,
  SwipeCellInstance,
} from './types';
