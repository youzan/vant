import type { ComponentPublicInstance, Ref } from 'vue';
import type { DropdownMenuProps } from './DropdownMenu';

export type DropdownMenuDirection = 'up' | 'down';

export type DropdownMenuProvide = {
  id: string;
  props: DropdownMenuProps;
  offset: Ref<number>;
  opened: Ref<boolean>;
  updateOffset: () => void;
};

export type DropdownMenuExpose = {
  opened: Ref<boolean>;
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
