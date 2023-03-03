import {
  computed,
  defineComponent,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';

import {
  addUnit,
  numericProp,
  createNamespace,
  makeNumericProp,
  makeStringProp,
} from '../utils';

import { useParent } from '@vant/use';

import { ROW_KEY } from '../row/Row';

const [name, bem] = createNamespace('col');

export const colProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  span: makeNumericProp(0),
  offset: numericProp,
};

export type ColProps = ExtractPropTypes<typeof colProps>;

export default defineComponent({
  name,

  props: colProps,

  setup(props, { slots }) {
    const { parent } = useParent(ROW_KEY);

    const style = computed(() => {
      if (!parent) {
        return;
      }

      const { gutter } = parent;
      const styles: CSSProperties = {};

      if (gutter) {
        const halfGutter = Number(gutter) / 2;
        styles.paddingLeft = addUnit(halfGutter);
        styles.paddingRight = addUnit(halfGutter);
      }

      return styles;
    });

    return () => {
      const { tag, span, offset } = props;

      return (
        <tag
          style={style.value}
          class={bem({ [span]: span, [`offset-${offset}`]: offset })}
        >
          {slots.default?.()}
        </tag>
      );
    };
  },
});
