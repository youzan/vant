import type { ButtonHTMLAttributes } from 'vue';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>;

export type ButtonIconPosition = 'left' | 'right';

export type ButtonThemeVars = {
  buttonMiniHeight?: string;
  buttonMiniPadding?: string;
  buttonMiniFontSize?: string;
  buttonSmallHeight?: string;
  buttonSmallPadding?: string;
  buttonSmallFontSize?: string;
  buttonNormalPadding?: string;
  buttonNormalFontSize?: string;
  buttonLargeHeight?: string;
  buttonDefaultHeight?: string;
  buttonDefaultLineHeight?: number | string;
  buttonDefaultFontSize?: string;
  buttonDefaultColor?: string;
  buttonDefaultBackground?: string;
  buttonDefaultBorderColor?: string;
  buttonPrimaryColor?: string;
  buttonPrimaryBackground?: string;
  buttonPrimaryBorderColor?: string;
  buttonSuccessColor?: string;
  buttonSuccessBackground?: string;
  buttonSuccessBorderColor?: string;
  buttonDangerColor?: string;
  buttonDangerBackground?: string;
  buttonDangerBorderColor?: string;
  buttonWarningColor?: string;
  buttonWarningBackground?: string;
  buttonWarningBorderColor?: string;
  buttonBorderWidth?: string;
  buttonRadius?: string;
  buttonRoundRadius?: string;
  buttonPlainBackground?: string;
  buttonDisabledOpacity?: number | string;
  buttonIconSize?: string;
  buttonLoadingIconSize?: string;
};
