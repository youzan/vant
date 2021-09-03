import type { DropdownItemProps } from './DropdownItem';
import type { VNode, ComponentPublicInstance } from 'vue';

export type DropdownItemOption = {
  text: string;
  icon?: string;
  value: number | string;
};

export type DropdownItemExpose = {
  toggle: (
    show?: boolean,
    options?: {
      immediate?: boolean;
    }
  ) => void;
  /**
   * @private
   */
  state: {
    showPopup: boolean;
    transition: boolean;
    showWrapper: boolean;
  };
  /**
   * @private
   */
  renderTitle: () => string | VNode[];
};

export type DropdownItemInstance = ComponentPublicInstance<
  DropdownItemProps,
  DropdownItemExpose
>;
