import { use } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [sfc, bem] = use('radio-group');

export default sfc({
  mixins: [ParentMixin('vanRadio')],

  props: {
    value: null,
    disabled: Boolean
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    }
  },

  render(h) {
    return (
      <div class={bem()} role="radiogroup">
        {this.slots()}
      </div>
    );
  }
});
