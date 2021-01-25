import { createNamespace } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

const [createComponent, bem] = createNamespace('cell-group');

export default createComponent({
  inheritAttrs: false,

  props: {
    title: String,
    border: {
      type: Boolean,
      default: true,
    },
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
