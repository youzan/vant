import { PropType, defineComponent, ExtractPropTypes, InjectionKey } from 'vue';
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

const props = {
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

export type GridProvide = {
  props: ExtractPropTypes<typeof props>;
};

export const GRID_KEY: InjectionKey<GridProvide> = Symbol(name);

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
