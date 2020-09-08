import { provide, reactive } from 'vue';
import { createNamespace, addUnit } from '../utils';
import { BORDER_TOP } from '../utils/constant';

const [createComponent, bem] = createNamespace('grid');

export const GRID_KEY = 'vanGrid';

export default createComponent({
  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    direction: String,
    clickable: Boolean,
    columnNum: {
      type: [Number, String],
      default: 4,
    },
    center: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { slots }) {
    const children = reactive([]);
    provide(GRID_KEY, { props, children });

    return () => (
      <div
        style={{ paddingLeft: addUnit(props.gutter) }}
        class={[bem(), { [BORDER_TOP]: props.border && !props.gutter }]}
      >
        {slots.default?.()}
      </div>
    );
  },
});
