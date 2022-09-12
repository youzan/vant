import type { ComponentPublicInstance } from 'vue';
import type { ProgressProps } from './Progress';

export type ProgressExpose = {
  resize: () => void;
};

export type ProgressInstance = ComponentPublicInstance<
  ProgressProps,
  ProgressExpose
>;

export type ProgressThemeVars = {
  progressHeight?: string;
  progressColor?: string;
  progressInactiveColor?: string;
  progressBackground?: string;
  progressPivotPadding?: string;
  progressPivotTextColor?: string;
  progressPivotFontSize?: string;
  progressPivotLineHeight?: number | string;
  progressPivotBackground?: string;
};
