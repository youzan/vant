import {
  defineComponent,
  type PropType,
  type InjectionKey,
  type ExtractPropTypes,
} from 'vue';
import {
  createNamespace,
  addUnit,
  truthProp,
  numericProp,
  makeNumericProp,
} from '../utils';
import { BORDER_TOP } from '../utils/constant';
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('grid');

export type GridDirection = 'horizontal' | 'vertical';

export const gridProps = {
  square: Boolean,
  center: truthProp,
  border: truthProp,
  gutter: numericProp,
  reverse: Boolean,
  iconSize: numericProp,
  direction: String as PropType<GridDirection>,
  clickable: Boolean,
  columnNum: makeNumericProp(4),
};

export type GridProps = ExtractPropTypes<typeof gridProps>;

export type GridProvide = {
  props: GridProps;
};

export const GRID_KEY: InjectionKey<GridProvide> = Symbol(name);

export default defineComponent({
  name,

  props: gridProps,

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
