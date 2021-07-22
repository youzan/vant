import {
  computed,
  PropType,
  ComputedRef,
  InjectionKey,
  defineComponent,
} from 'vue';
import { truthProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('row');

export type RowSpaces = { left?: number; right: number }[];

export type RowProvide = {
  spaces: ComputedRef<RowSpaces>;
};

export const ROW_KEY: InjectionKey<RowProvide> = Symbol(name);

export type RowAlign = 'top' | 'center' | 'bottom';

export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between';

export default defineComponent({
  name,

  props: {
    wrap: truthProp,
    align: String as PropType<RowAlign>,
    justify: String as PropType<RowJustify>,
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
    gutter: {
      type: [Number, String],
      default: 0,
    },
  },

  setup(props, { slots }) {
    const { children, linkChildren } = useChildren(ROW_KEY);

    const groups = computed(() => {
      const groups: number[][] = [[]];

      let totalSpan = 0;
      children.forEach((child, index) => {
        totalSpan += Number(child.span);

        if (totalSpan > 24) {
          groups.push([index]);
          totalSpan -= 24;
        } else {
          groups[groups.length - 1].push(index);
        }
      });

      return groups;
    });

    const spaces = computed(() => {
      const gutter = Number(props.gutter);
      const spaces: RowSpaces = [];

      if (!gutter) {
        return spaces;
      }

      groups.value.forEach((group) => {
        const averagePadding = (gutter * (group.length - 1)) / group.length;

        group.forEach((item, index) => {
          if (index === 0) {
            spaces.push({ right: averagePadding });
          } else {
            const left = gutter - spaces[item - 1].right;
            const right = averagePadding - left;
            spaces.push({ left, right });
          }
        });
      });

      return spaces;
    });

    linkChildren({ spaces });

    return () => {
      const { tag, wrap, align, justify } = props;
      return (
        <tag
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
