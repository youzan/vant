import { createNamespace } from '../utils';
import { FieldMixin } from '../mixins/field';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('radio-group');

export default createComponent({
  mixins: [ParentMixin('vanRadio'), FieldMixin],

  props: {
    disabled: Boolean,
    direction: String,
    modelValue: null,
    checkedColor: String,
    iconSize: [Number, String],
  },

  emits: ['change', 'update:modelValue'],

  watch: {
    value(value) {
      this.$emit('change', value);
    },
  },

  render() {
    return (
      <div class={bem([this.direction])} role="radiogroup">
        {this.$slots.default?.()}
      </div>
    );
  },
});
