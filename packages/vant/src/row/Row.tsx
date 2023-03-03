import {
  computed,
  defineComponent,
  type PropType,
  type InjectionKey,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';

import {
  addUnit,
  Numeric,
  truthProp,
  makeStringProp,
  makeNumericProp,
  createNamespace,
} from '../utils';

import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('row');

export type RowProvide = {
  gutter: Numeric;
};

export const ROW_KEY: InjectionKey<RowProvide> = Symbol(name);

export type RowAlign = 'top' | 'center' | 'bottom';

export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between';

export const rowProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  wrap: truthProp,
  align: String as PropType<RowAlign>,
  gutter: makeNumericProp(0),
  justify: String as PropType<RowJustify>,
};

export type RowProps = ExtractPropTypes<typeof rowProps>;

export default defineComponent({
  name,

  props: rowProps,

  setup(props, { slots }) {
    const { linkChildren } = useChildren(ROW_KEY);

    const style = computed(() => {
      const styles: CSSProperties = {};
      if (!props.gutter) {
        return styles;
      }

      const gutter = Number(props.gutter);
      const halfGutter = gutter / 2;

      styles.marginLeft = addUnit(-halfGutter);
      styles.marginRight = addUnit(-halfGutter);

      return styles;
    });

    linkChildren({ gutter: props.gutter });

    return () => {
      const { tag, wrap, align, justify } = props;
      return (
        <tag
          style={style.value}
          class={bem({
            [`align-${align}`]: align,
            [`justify-${justify}`]: justify,
            nowrap: !wrap,
          })}
        >
          {slots.default?.()}
        </tag>
      );
    };
  },
});
