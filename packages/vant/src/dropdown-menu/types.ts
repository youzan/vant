import type { ComponentPublicInstance, Ref, CSSProperties } from 'vue';
import type { DropdownMenuProps } from './DropdownMenu';

export type DropdownMenuDirection = 'up' | 'down';

export type DropdownMenuProvide = {
  id: string;
  props: DropdownMenuProps;
  offsetStyle: Ref<CSSProperties>;
  updateOffset: () => void;
};

export type DropdownMenuExpose = {
  close: () => void;
};

export type DropdownMenuInstance = ComponentPublicInstance<
  DropdownMenuProps,
  DropdownMenuExpose
>;

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
  dropdownMenuOptionDisabledColor?: string;
  dropdownMenuContentMaxHeight?: string;
};
