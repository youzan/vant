import { PropType, defineComponent } from 'vue';
import { truthProp, createNamespace } from '../utils';

const [name, bem] = createNamespace('divider');

export type DividerContentPosition = 'left' | 'center' | 'right';

export default defineComponent({
  name,

  props: {
    dashed: Boolean,
    hairline: truthProp,
    contentPosition: {
      type: String as PropType<DividerContentPosition>,
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
