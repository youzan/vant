import type { CSSProperties } from 'vue';

export type ImageFit = CSSProperties['objectFit'];

export type ImagePosition = CSSProperties['objectPosition'];

export type ImageThemeVars = {
  imagePlaceholderTextColor?: string;
  imagePlaceholderFontSize?: string;
  imagePlaceholderBackground?: string;
  imageLoadingIconSize?: string;
  imageLoadingIconColor?: string;
  imageErrorIconSize?: string;
  imageErrorIconColor?: string;
};
