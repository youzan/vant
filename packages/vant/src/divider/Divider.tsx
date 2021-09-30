import { defineComponent } from 'vue';
import { truthProp, makeStringProp, createNamespace } from '../utils';

const [name, bem] = createNamespace('divider');

export type DividerContentPosition = 'left' | 'center' | 'right';

export default defineComponent({
  name,

  props: {
    dashed: Boolean,
    hairline: truthProp,
    contentPosition: makeStringProp<DividerContentPosition>('center'),
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
