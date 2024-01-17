import type { ComponentPublicInstance } from 'vue';
import type { RollingTextProps } from './RollingText';

export type RollingTextDirection = 'up' | 'down';
export type RollingTextStopOrder = 'ltr' | 'rtl';

export type RollingTextExpose = {
  start: () => void;
  reset: () => void;
};

export type RollingTextGroupExpose = {
  start: () => void;
};

export type RollingTextInstance = ComponentPublicInstance<
  RollingTextProps,
  RollingTextExpose
>;

export type RollingTextGroupInstance = ComponentPublicInstance<
  RollingTextGroupExpose
>;

export type RollingTextThemeVars = {
  rollingTextBackground?: string;
  rollingTextColor?: string;
  rollingTextFontSize?: string;
  rollingTextGap?: string;
  rollingTextItemWidth?: string;
  rollingTextItemBorderRadius?: string;
};
