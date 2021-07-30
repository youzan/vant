import type { ComponentPublicInstance, ComputedRef } from 'vue';
import type { CheckboxProps } from './Checkbox';

export type CheckboxExpose = {
  toggle: (newValue?: boolean) => void;
  /**
   * @private
   */
  props: CheckboxProps;
  /**
   * @private
   */
  checked: ComputedRef<boolean>;
};

export type CheckboxInstance = ComponentPublicInstance<
  CheckboxProps,
  CheckboxExpose
>;
