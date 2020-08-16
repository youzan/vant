import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

const [createComponent, bem] = createNamespace('collapse');

export default createComponent({
  mixins: [ParentMixin('vanCollapse')],

  props: {
    accordion: Boolean,
    modelValue: [String, Number, Array],
    border: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['change', 'update:modelValue'],

  methods: {
    switch(name, expanded) {
      if (!this.accordion) {
        name = expanded
          ? this.modelValue.concat(name)
          : this.modelValue.filter((activeName) => activeName !== name);
      }
      this.$emit('change', name);
      this.$emit('update:modelValue', name);
    },
  },

  render() {
    return (
      <div class={[bem(), { [BORDER_TOP_BOTTOM]: this.border }]}>
        {this.$slots.default?.()}
      </div>
    );
  },
});
