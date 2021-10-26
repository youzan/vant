export const FieldMixin = {
  inject: {
    vanField: {
      default: null,
    },
  },

  watch: {
    value(value, old) {
      const field = this.vanField;
      if (field) {
        field.$emit('input', (this.type === 'number' || this.type === 'digit') ? Number(value) : value);
        field.$emit('update:value', (this.type === 'number' || this.type === 'digit') ? Number(value) : value);
        field.resetValidation();
        field.validateWithTrigger('onChange');
      }
    },
    defaultDate() {
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
