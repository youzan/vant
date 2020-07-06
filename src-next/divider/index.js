import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('divider');

export default createComponent({
  props: {
    dashed: Boolean,
    hairline: {
      type: Boolean,
      default: true,
    },
    contentPosition: {
      type: String,
      default: 'center',
    },
  },

  render() {
    const Content = this.$slots.default?.();
    return (
      <div
        role="separator"
        class={bem({
          dashed: this.dashed,
          hairline: this.hairline,
          [`content-${this.contentPosition}`]: !!Content,
        })}
      >
        {Content}
      </div>
    );
  },
});
