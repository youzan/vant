export const FieldMixin = {
  inject: {
    vanField: {
      default: null,
    },
  },

  created() {
    if (this.vanField) {
      this.vanField.children = this;
    }
  },
};
