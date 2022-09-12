import type { ComponentPublicInstance } from 'vue';
import type { ListProps } from './List';

export type ListDirection = 'up' | 'down';

export type ListExpose = {
  check: () => void;
};

export type ListInstance = ComponentPublicInstance<ListProps, ListExpose>;

export type ListThemeVars = {
  listTextColor?: string;
  listTextFontSize?: string;
  listTextLineHeight?: number | string;
  listLoadingIconSize?: string;
};
