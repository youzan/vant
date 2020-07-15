import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('sidebar');

export default createComponent({
  mixins: [ParentMixin('vanSidebar')],

  emits: ['change', 'update:modelValue'],

  props: {
    modelValue: {
      type: [Number, String],
      default: 0,
    },
  },

  data() {
    return {
      index: +this.modelValue,
    };
  },

  watch: {
    modelValue() {
      this.setIndex(+this.modelValue);
    },
  },

  methods: {
    setIndex(index) {
      if (index !== this.index) {
        this.index = index;
        this.$emit('change', index);
      }
    },
  },

  render() {
    return <div class={bem()}>{this.$slots.default?.()}</div>;
  },
});
