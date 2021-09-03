import type { ComponentPublicInstance } from 'vue';
import type { ProgressProps } from './Progress';

export type ProgressExpose = {
  resize: () => void;
};

export type ProgressInstance = ComponentPublicInstance<
  ProgressProps,
  ProgressExpose
>;
