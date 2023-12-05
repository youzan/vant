import type { ComponentPublicInstance } from 'vue';
import type { TextEllipsisProps } from './TextEllipsis';

export type TextEllipsisExpose = {
  toggle: (expanded?: boolean) => void;
  getTextEllipsized: () => boolean;
};

export type TextEllipsisInstance = ComponentPublicInstance<
  TextEllipsisProps,
  TextEllipsisExpose
>;

export type TextEllipsisThemeVars = {
  textEllipsisActionColor?: string;
};
