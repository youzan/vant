import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('radio-group');

export default createComponent({
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
