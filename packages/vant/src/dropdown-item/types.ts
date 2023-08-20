import type { DropdownItemProps } from './DropdownItem';
import type { VNode, ComponentPublicInstance } from 'vue';
import type { Numeric } from '../utils';

export type DropdownItemOptionValue = Numeric | boolean;

export type DropdownItemOption = {
  text: string;
  icon?: string;
  value: DropdownItemOptionValue;
};

export type DropdownItemExpose = {
  toggle: (
    show?: boolean,
    options?: {
      immediate?: boolean;
    },
  ) => void;
  /** @private */
  state: {
    showPopup: boolean;
    transition: boolean;
    showWrapper: boolean;
  };
  /** @private */
  renderTitle: () => string | VNode[];
};

export type DropdownItemInstance = ComponentPublicInstance<
  DropdownItemProps,
  DropdownItemExpose
>;

export type DropdownItemThemeVars = {
  dropdownItemZIndex?: number | string;
};
