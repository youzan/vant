import { FIELD_KEY } from '../field';

export const FieldMixin = {
  inject: {
    vanField: {
      from: FIELD_KEY,
      default: null,
    },
  },

  watch: {
    modelValue() {
      const field = this.vanField;

      if (field) {
        field.resetValidation();
        field.validateWithTrigger('onChange');
      }
    },
  },

  created() {
    const field = this.vanField;

    if (field && !field.childFieldValue.value) {
      field.childFieldValue.value = () => this.modelValue;
    }
  },
};
