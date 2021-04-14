import { defineComponent } from 'vue';
import { truthProp, createNamespace } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

const [name, bem] = createNamespace('cell-group');

export default defineComponent({
  name,

  inheritAttrs: false,

  props: {
    title: String,
    border: truthProp,
  },

  setup(props, { slots, attrs }) {
    const renderGroup = () => (
      <div class={[bem(), { [BORDER_TOP_BOTTOM]: props.border }]} {...attrs}>
        {slots.default?.()}
      </div>
    );

    const renderTitle = () => (
      <div class={bem('title')}>
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
