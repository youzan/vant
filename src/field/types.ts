import type { ComputedRef, ComponentPublicInstance } from 'vue';
import type { FieldProps } from './Field';

export type FieldType =
  | 'tel'
  | 'text'
  | 'digit'
  | 'number'
  | 'search'
  | 'password'
  | 'textarea';

export type FieldTextAlign = 'left' | 'center' | 'right';

export type FieldClearTrigger = 'always' | 'focus';

export type FieldFormatTrigger = 'onBlur' | 'onChange';

export type FieldValidateTrigger = 'onBlur' | 'onChange' | 'onSubmit';

export type FieldAutosizeConfig = {
  maxHeight?: number;
  minHeight?: number;
};

export type FieldValidateError = {
  name?: string;
  message: string;
};

export type FieldRule = {
  pattern?: RegExp;
  trigger?: FieldValidateTrigger;
  message?: string | ((value: any, rule: FieldRule) => string);
  required?: boolean;
  validator?: (
    value: any,
    rule: FieldRule
  ) => boolean | string | Promise<boolean | string>;
  formatter?: (value: any, rule: FieldRule) => string;
};

// Shared props of Field and Form
export type FieldFormSharedProps =
  | 'colon'
  | 'disabled'
  | 'readonly'
  | 'labelWidth'
  | 'labelAlign'
  | 'inputAlign'
  | 'errorMessageAlign';

export type FieldExpose = {
  blur: () => void | undefined;
  focus: () => void | undefined;
  validate: (
    rules?: FieldRule[] | undefined
  ) => Promise<void | FieldValidateError>;
  resetValidation: () => void;
  /**
   * @private
   */
  formValue: ComputedRef<unknown>;
};

export type FieldInstance = ComponentPublicInstance<FieldProps, FieldExpose>;

declare global {
  interface EventTarget {
    composing?: boolean;
  }
}
