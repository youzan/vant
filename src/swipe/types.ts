import type { ComponentPublicInstance, ComputedRef } from 'vue';
import type { SwipeProps } from './Swipe';

export type SwipeState = {
  rect: { width: number; height: number } | null;
  width: number;
  height: number;
  offset: number;
  active: number;
  swiping: boolean;
};

export type SwipeToOptions = {
  immediate?: boolean;
};

export type SwipeExpose = {
  prev: () => void;
  next: () => void;
  resize: () => void;
  swipeTo: (index: number, options?: SwipeToOptions) => void;
  /**
   * @private
   */
  state: SwipeState;
};

export type SwipeProvide = {
  props: SwipeProps;
  size: ComputedRef<number>;
  count: ComputedRef<number>;
  activeIndicator: ComputedRef<number>;
};

export type SwipeInstance = ComponentPublicInstance<SwipeProps, SwipeExpose>;
