import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('checkbox-group');

export default createComponent({
  mixins: [ParentMixin('vanCheckbox')],

  props: {
    max: Number,
    value: Array,
    disabled: Boolean
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  render(h) {
    return <div class={bem()}>{this.slots()}</div>;
  }
});
