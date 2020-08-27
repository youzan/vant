import { FIELD_KEY } from '../field';

export const FieldMixin = {
  inject: {
    vanField: {
      from: FIELD_KEY,
      default: null,
    },
  },

  watch: {
    value() {
      const field = this.vanField;

      if (field) {
        field.resetValidation();
        field.validateWithTrigger('onChange');
      }
    },
  },

  created() {
    const field = this.vanField;

    if (field && !field.children) {
      field.children = this;
    }
  },
};
