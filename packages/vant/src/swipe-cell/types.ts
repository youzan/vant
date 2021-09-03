import type { ComponentPublicInstance } from 'vue';
import type { SwipeCellProps } from './SwipeCell';

export type SwipeCellSide = 'left' | 'right';

export type SwipeCellPosition = SwipeCellSide | 'cell' | 'outside';

export type SwipeCellExpose = {
  open: (side: SwipeCellSide) => void;
  close: (position: SwipeCellPosition) => void;
};

export type SwipeCellInstance = ComponentPublicInstance<
  SwipeCellProps,
  SwipeCellExpose
>;
