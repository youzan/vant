import { createNamespace } from '../utils';
import { CheckboxMixin } from '../mixins/checkbox';

const [createComponent, bem] = createNamespace('radio');

export default createComponent({
  mixins: [
    CheckboxMixin({
      bem,
      role: 'radio',
      parent: 'vanRadio',
    }),
  ],

  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.datatemp : this.value;
      },

      set(val) {
        if (this.parent) {
          this.parent.datatemp = val;
        } else {
          this.$emit('input', val);
          this.$emit('update:value', val);
        }
        // (this.parent || this).$emit('input', val);
        // (this.parent || this).$emit('update:value', val);
      },
    },

    checked() {
      return this.currentValue === this.name;
    },
  },

  methods: {
    toggle() {
      this.currentValue = this.name;
    },
  },
});
