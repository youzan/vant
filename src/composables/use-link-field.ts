import { watch, inject, InjectionKey } from 'vue';
import type { FormProvide } from '../form/Form';
import type { FieldProvide } from '../field/types';

export const FORM_KEY: InjectionKey<FormProvide> = Symbol('van-form');
export const FIELD_KEY: InjectionKey<FieldProvide> = Symbol('van-field');

export function useLinkField(getValue: () => unknown) {
  const field = inject(FIELD_KEY, null);

  if (field && !field.childFieldValue.value) {
    field.childFieldValue.value = getValue;

    watch(getValue, () => {
      field.resetValidation();
      field.validateWithTrigger('onChange');
    });
  }
}
