import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('action-bar');

export default createComponent({
  mixins: [ParentMixin('vanActionBar')],

  props: {
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
  },

  render() {
    return (
      <div class={bem({ unfit: !this.safeAreaInsetBottom })}>
        {this.$slots.default?.()}
      </div>
    );
  },
});
