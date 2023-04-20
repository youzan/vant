import { ComponentPublicInstance } from 'vue';
import { BarrageProps } from './Barrage';

export type BarrageExpose = {
  play(): void;
  pause(): void;
  add(item: string | number): void;
};

export type BarrageInstance = ComponentPublicInstance<
  BarrageProps,
  BarrageExpose
>;
