import { watch, inject, InjectionKey, Ref } from 'vue';

export type CustomFieldInjectionValue = {
  childFieldValue: Ref<(() => unknown) | undefined>;
  resetValidation: () => void;
  validateWithTrigger: (trigger: 'onBlur' | 'onChange' | 'onSubmit') => void;
};

export const CUSTOM_FIELD_INJECTION_KEY: InjectionKey<CustomFieldInjectionValue> = Symbol(
  'van-field'
);

export function useCustomFieldValue(getValue: () => unknown) {
  const field = inject(CUSTOM_FIELD_INJECTION_KEY, null);

  if (field && !field.childFieldValue.value) {
    field.childFieldValue.value = getValue;

    watch(getValue, () => {
      field.resetValidation();
      field.validateWithTrigger('onChange');
    });
  }
}
