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
    return () => {
      const { title, border } = props;

      const Group = (
        <div class={[bem(), { [BORDER_TOP_BOTTOM]: border }]} {...attrs}>
          {slots.default?.()}
        </div>
      );

      if (title || slots.title) {
        return (
          <>
            <div class={bem('title')}>
              {slots.title ? slots.title() : title}
            </div>
            {Group}
          </>
        );
      }

      return Group;
    };
  },
});
