// Use explicit union types instead of CSSProperties lookups to avoid
// csstype leaking into consumers' generated d.ts files (TS2742).
export type ImageFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'none'
  | 'scale-down';

export type ImagePosition = string;

export type ImageThemeVars = {
  imagePlaceholderTextColor?: string;
  imagePlaceholderFontSize?: string;
  imagePlaceholderBackground?: string;
  imageLoadingIconSize?: string;
  imageLoadingIconColor?: string;
  imageErrorIconSize?: string;
  imageErrorIconColor?: string;
};
