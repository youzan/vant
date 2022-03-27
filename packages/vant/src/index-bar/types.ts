import type { ComponentPublicInstance } from 'vue';
import type { Numeric } from '../utils';
import type { IndexBarProps } from './IndexBar';

export type IndexBarProvide = {
  props: IndexBarProps;
};

export type IndexBarExpose = {
  scrollTo: (index: Numeric) => void;
};

export type IndexBarInstance = ComponentPublicInstance<
  IndexBarProps,
  IndexBarExpose
>;
