export const FieldMixin = {
  inject: {
    vanField: {
      default: null,
    },
  },

  watch: {
    value() {
      if (this.vanField) {
        this.vanField.resetValidate();
      }
    },
  },

  created() {
    if (this.vanField && !this.vanField.children) {
      this.vanField.children = this;
    }
  },
};
