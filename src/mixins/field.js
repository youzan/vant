export const FieldMixin = {
  inject: {
    vanField: {
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
