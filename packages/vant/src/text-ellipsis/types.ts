import type { ComponentPublicInstance } from 'vue';
import type { TextEllipsisProps } from './TextEllipsis';

export type TextEllipsisExpose = {
  toggle: () => void;
};

export type TextEllipsisInstance = ComponentPublicInstance<
  TextEllipsisProps,
  TextEllipsisExpose
>;

export type TextEllipsisThemeVars = {
  textEllipsisActionColor?: string;
};
