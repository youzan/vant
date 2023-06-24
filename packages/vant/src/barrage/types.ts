import { ComponentPublicInstance } from 'vue';
import { BarrageProps } from './Barrage';

export type BarrageExpose = {
  play(): void;
  pause(): void;
};

export type BarrageInstance = ComponentPublicInstance<
  BarrageProps,
  BarrageExpose
>;

export type BarrageThemeVars = {
  barrageFontSize?: string;
  barrageSpace?: string;
  barrageFont?: string;
  barrageColor?: string;
};
