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

  setup(props, { slots }) {
    return () => (
      <div
        role="separator"
        class={bem({
          dashed: props.dashed,
          hairline: props.hairline,
          [`content-${props.contentPosition}`]: !!slots.default,
        })}
      >
        {slots.default?.()}
      </div>
    );
  },
});
