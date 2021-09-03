import type { ComponentPublicInstance } from 'vue';
import type { FormProps } from './Form';

export type FormExpose = {
  submit: () => void;
  validate: (name?: string | string[] | undefined) => Promise<void>;
  scrollToField: (
    name: string,
    options?: boolean | ScrollIntoViewOptions | undefined
  ) => void;
  resetValidation: (name?: string | string[] | undefined) => void;
};

export type FormProvide = {
  props: FormProps;
};

export type FormInstance = ComponentPublicInstance<FormProps, FormExpose>;
