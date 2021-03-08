import { ComponentInstance } from '../utils';
import { watch, inject } from 'vue';

export const FORM_KEY = Symbol('van-form');
export const FIELD_KEY = Symbol('van-field');

export function useLinkField(getValue: () => unknown) {
  const field = inject(FIELD_KEY, null) as ComponentInstance | null;

  if (field && !field.childFieldValue.value) {
    field.childFieldValue.value = getValue;

    watch(getValue, () => {
      field.resetValidation();
      field.validateWithTrigger('onChange');
    });
  }
}
