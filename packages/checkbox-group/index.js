import { use } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [sfc, bem] = use('checkbox-group');

export default sfc({
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
