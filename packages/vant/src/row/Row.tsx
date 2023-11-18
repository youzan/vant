import {
  computed,
  defineComponent,
  type PropType,
  type ComputedRef,
  type InjectionKey,
  type ExtractPropTypes,
} from 'vue';
import { truthProp, makeStringProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('row');

export type RowSpaces = { left?: number; right: number }[];
export type VerticalSpaces = { bottom?: number }[];

export type RowProvide = {
  spaces: ComputedRef<RowSpaces>;
  verticalSpaces: ComputedRef<VerticalSpaces>;
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
  gutter: {
    type: [String, Number, Array] as PropType<
      string | number | (string | number)[]
    >,
    default: 0,
  },
  justify: String as PropType<RowJustify>,
};

export type RowProps = ExtractPropTypes<typeof rowProps>;

export default defineComponent({
  name,

  props: rowProps,

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
      let gutter = 0;
      if (Array.isArray(props.gutter)) {
        gutter = Number(props.gutter[0]) || 0;
      } else {
        gutter = Number(props.gutter);
      }
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

    const verticalSpaces = computed(() => {
      const { gutter } = props;
      const spaces: VerticalSpaces = [];
      if (Array.isArray(gutter) && gutter.length > 1) {
        const bottom = Number(gutter[1]) || 0;
        if (bottom <= 0) {
          return spaces;
        }
        groups.value.forEach((group, index) => {
          if (index === groups.value.length - 1) return;
          group.forEach(() => {
            spaces.push({ bottom });
          });
        });
      }
      return spaces;
    });

    linkChildren({ spaces, verticalSpaces });

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
