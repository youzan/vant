import type { ComponentPublicInstance } from 'vue';
import type { IndexBarProps } from './IndexBar';

export type IndexBarProvide = {
  props: IndexBarProps;
};

export type IndexBarExpose = {
  scrollTo: (index: string | number) => void;
};

export type IndexBarInstance = ComponentPublicInstance<
  IndexBarProps,
  IndexBarExpose
>;
