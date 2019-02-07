import { use } from '../utils';

const [sfc, bem] = use('checkbox-group');

export default sfc({
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
