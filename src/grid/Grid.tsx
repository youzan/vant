import { PropType, defineComponent, ExtractPropTypes } from 'vue';
import { createNamespace, addUnit, truthProp } from '../utils';
import { BORDER_TOP } from '../utils/constant';
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('grid');

export const GRID_KEY = Symbol(name);

export type GridDirection = 'horizontal' | 'vertical';

const props = {
  square: Boolean,
  center: truthProp,
  border: truthProp,
  gutter: [Number, String],
  reverse: Boolean,
  iconSize: [Number, String],
  direction: String as PropType<GridDirection>,
  clickable: Boolean,
  columnNum: {
    type: [Number, String],
    default: 4,
  },
};

export type GridProvide = {
  props: ExtractPropTypes<typeof props>;
};

export default defineComponent({
  name,

  props,

  setup(props, { slots }) {
    const { linkChildren } = useChildren(GRID_KEY);

    linkChildren({ props });

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
