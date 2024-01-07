export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export type ImagePosition =
  | 'center'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | string;

export type ImageThemeVars = {
  imagePlaceholderTextColor?: string;
  imagePlaceholderFontSize?: string;
  imagePlaceholderBackground?: string;
  imageLoadingIconSize?: string;
  imageLoadingIconColor?: string;
  imageErrorIconSize?: string;
  imageErrorIconColor?: string;
};
