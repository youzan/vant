import type { ComponentPublicInstance } from 'vue';
import type { ProgressProps } from './Progress';

export type ProgressInstance = ComponentPublicInstance<ProgressProps>;

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
