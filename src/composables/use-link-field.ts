import { watch, inject } from 'vue';

export const FORM_KEY = 'vanForm';
export const FIELD_KEY = 'vanField';

export function useLinkField(getValue: () => unknown) {
  const field = inject(FIELD_KEY, null) as any;

  if (field && !field.childFieldValue.value) {
    field.childFieldValue.value = getValue;

    watch(getValue, () => {
      field.resetValidation();
      field.validateWithTrigger('onChange');
    });
  }
}
