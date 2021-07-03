import { ComponentInstance } from '../utils';
import { watch, inject, InjectionKey } from 'vue';

export const FORM_KEY = Symbol('van-form');
export const FIELD_KEY: InjectionKey<ComponentInstance> = Symbol('van-field');

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
