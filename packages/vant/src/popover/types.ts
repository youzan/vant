export type PopoverTheme = 'light' | 'dark';
export type PopoverActionsDirection = 'horizontal' | 'vertical';
export type PopoverTrigger = 'manual' | 'click';
export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';

export type PopoverAction = {
  text: string;
  icon?: string;
  color?: string;
  disabled?: boolean;
  className?: string;
  [key: PropertyKey]: any;
};

export type PopoverThemeVars = {
  popoverArrowSize?: string;
  popoverRadius?: string;
  popoverActionWidth?: string;
  popoverActionHeight?: string;
  popoverActionFontSize?: string;
  popoverActionLineHeight?: number | string;
  popoverActionIconSize?: string;
  popoverLightTextColor?: string;
  popoverLightBackground?: string;
  popoverLightActionDisabledTextColor?: string;
  popoverDarkTextColor?: string;
  popoverDarkBackground?: string;
  popoverDarkActionDisabledTextColor?: string;
};
