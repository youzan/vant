// Utils
import { createNamespace } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

const [createComponent, bem] = createNamespace('cell-group');

export default createComponent({
  props: {
    title: String,
    border: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { slots }) {
    return function () {
      const Group = (
        <div class={[bem(), { [BORDER_TOP_BOTTOM]: props.border }]}>
          {slots.default?.()}
        </div>
      );

      if (props.title || slots.title) {
        return (
          <>
            <div class={bem('title')} {...this.$attrs}>
              {slots.title ? slots.title() : props.title}
            </div>
            {Group}
          </>
        );
      }

      return Group;
    };
  },
});
