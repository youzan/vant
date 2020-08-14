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

  emits: ['click', 'update:modelValue'],

  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.modelValue : this.modelValue;
      },

      set(val) {
        (this.parent || this).$emit('update:modelValue', val);
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
