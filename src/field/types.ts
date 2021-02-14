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

export type FieldRule = {
  pattern?: RegExp;
  trigger?: FieldValidateTrigger;
  message?: string | ((value: unknown, rule: FieldRule) => string);
  required?: boolean;
  validator?: (
    value: unknown,
    rule: FieldRule
  ) => boolean | string | Promise<boolean | string>;
  formatter?: (value: unknown, rule: FieldRule) => string;
};

declare global {
  interface EventTarget {
    composing?: boolean;
  }
}
