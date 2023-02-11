import {
  computed,
  Comment,
  CSSProperties,
  defineComponent,
  ExtractPropTypes,
  Fragment,
  PropType,
  Text,
  type VNode,
} from 'vue';
import { createNamespace } from '../utils';

const [name, bem] = createNamespace('space');

export type SpaceSize = number | string;
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';

export const spaceProps = {
  align: String as PropType<SpaceAlign>,
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal',
  },
  size: {
    type: [Number, String, Array] as PropType<
      number | string | [SpaceSize, SpaceSize]
    >,
    default: 8,
  },
  wrap: Boolean,
  fill: Boolean,
};

export type SpaceProps = ExtractPropTypes<typeof spaceProps>;

function filterEmpty(children: VNode[] = []) {
  const nodes: VNode[] = [];
  children.forEach((child) => {
    if (Array.isArray(child)) {
      nodes.push(...child);
    } else if (child.type === Fragment) {
      nodes.push(...filterEmpty(child.children as VNode[]));
    } else {
      nodes.push(child);
    }
  });
  return nodes.filter(
    (c) =>
      !(
        c &&
        (c.type === Comment ||
          (c.type === Fragment && c.children?.length === 0) ||
          (c.type === Text && (c.children as string).trim() === ''))
      )
  );
}

export default defineComponent({
  name,
  props: spaceProps,
  setup(props, { slots }) {
    const mergedAlign = computed(
      () => props.align ?? (props.direction === 'horizontal' ? 'center' : '')
    );

    const getMargin = (size: SpaceSize) => {
      if (typeof size === 'number') {
        return size + 'px';
      }
      return size;
    };
    const getMarginStyle = (isLast: boolean): CSSProperties => {
      const style: CSSProperties = {};

      const marginRight = `${getMargin(
        Array.isArray(props.size) ? props.size[0] : props.size
      )}`;
      const marginBottom = `${getMargin(
        Array.isArray(props.size) ? props.size[1] : props.size
      )}`;

      if (isLast) {
        return props.wrap ? { marginBottom } : {};
      }

      if (props.direction === 'horizontal') {
        style.marginRight = marginRight;
      }
      if (props.direction === 'vertical' || props.wrap) {
        style.marginBottom = marginBottom;
      }

      return style;
    };

    return () => {
      const children = filterEmpty(slots.default?.());
      return (
        <div
          class={[
            bem({
              [props.direction]: props.direction,
              [`align-${mergedAlign.value}`]: mergedAlign.value,
              wrap: props.wrap,
              fill: props.fill,
            }),
          ]}
        >
          {children.map((c, i) => (
            <div
              key={`item-${i}`}
              class={`${name}-item`}
              style={getMarginStyle(i === children.length - 1)}
            >
              {c}
            </div>
          ))}
        </div>
      );
    };
  },
});
