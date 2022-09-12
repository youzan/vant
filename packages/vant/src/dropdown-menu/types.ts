import type { Ref } from 'vue';
import type { DropdownMenuProps } from './DropdownMenu';

export type DropdownMenuDirection = 'up' | 'down';

export type DropdownMenuProvide = {
  id: string;
  props: DropdownMenuProps;
  offset: Ref<number>;
};

export type DropdownMenuThemeVars = {
  dropdownMenuHeight?: string;
  dropdownMenuBackground?: string;
  dropdownMenuShadow?: string;
  dropdownMenuTitleFontSize?: string;
  dropdownMenuTitleTextColor?: string;
  dropdownMenuTitleActiveTextColor?: string;
  dropdownMenuTitleDisabledTextColor?: string;
  dropdownMenuTitlePadding?: string;
  dropdownMenuTitleLineHeight?: number | string;
  dropdownMenuOptionActiveColor?: string;
  dropdownMenuContentMaxHeight?: string;
};
