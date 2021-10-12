import type { ComponentPublicInstance } from 'vue';
import type { CheckboxGroupProps } from './CheckboxGroup';
import type { CheckerParent, CheckerDirection } from '../checkbox/Checker';

export type CheckboxGroupDirection = CheckerDirection;

export type CheckboxGroupToggleAllOptions =
  | boolean
  | {
      checked?: boolean;
      skipDisabled?: boolean;
    };

export type CheckboxGroupExpose = {
  toggleAll: (options?: CheckboxGroupToggleAllOptions) => void;
};

export type CheckboxGroupInstance = ComponentPublicInstance<
  CheckboxGroupProps,
  CheckboxGroupExpose
>;

export type CheckboxGroupProvide = CheckerParent & {
  props: CheckboxGroupProps;
  updateValue: (value: unknown[]) => void;
};
