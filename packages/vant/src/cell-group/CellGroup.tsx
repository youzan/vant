import { defineComponent } from 'vue';
import { truthProp, createNamespace, BORDER_TOP_BOTTOM } from '../utils';

const [name, bem] = createNamespace('cell-group');

export default defineComponent({
  name,

  inheritAttrs: false,

  props: {
    title: String,
    inset: Boolean,
    border: truthProp,
  },

  setup(props, { slots, attrs }) {
    const renderGroup = () => (
      <div
        class={[
          bem({ inset: props.inset }),
          { [BORDER_TOP_BOTTOM]: props.border && !props.inset },
        ]}
        {...attrs}
      >
        {slots.default?.()}
      </div>
    );

    const renderTitle = () => (
      <div class={bem('title', { inset: props.inset })}>
        {slots.title ? slots.title() : props.title}
      </div>
    );

    return () => {
      if (props.title || slots.title) {
        return (
          <>
            {renderTitle()}
            {renderGroup()}
          </>
        );
      }

      return renderGroup();
    };
  },
});
