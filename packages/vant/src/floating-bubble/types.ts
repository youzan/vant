export type FloatingBubbleThemeVars = {
  floatingBubbleSize?: string;
  floatingBubbleInitialGap?: string;
  floatingBubbleIconSize?: string;
  floatingBubbleBackground?: string;
  floatingBubbleColor?: string;
  floatingBubbleZIndex?: number | string;
};

export type FloatingBubbleAxis = 'x' | 'y' | 'xy' | 'lock';

export type FloatingBubbleMagnetic = 'x' | 'y';

export type FloatingBubbleOffset = {
  x: number;
  y: number;
};

export type FloatingBubbleBoundary = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};
