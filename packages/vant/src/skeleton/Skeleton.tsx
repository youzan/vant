import { defineComponent, type PropType, type ExtractPropTypes } from 'vue';

// Utils
import {
  extend,
  addUnit,
  truthProp,
  makeNumericProp,
  createNamespace,
  type Numeric,
} from '../utils';

// Components
import {
  SkeletonItem,
  DEFAULT_ROW_WIDTH,
  skeletonCommonProps,
} from '../skeleton-item';

const [name, bem] = createNamespace('skeleton');
const DEFAULT_LAST_ROW_WIDTH = '60%';

export const skeletonProps = extend({}, skeletonCommonProps, {
  row: makeNumericProp(0),
  title: Boolean,
  avatar: Boolean,
  loading: truthProp,
  animate: truthProp,
  rowWidth: {
    type: [Number, String, Array] as PropType<Numeric | Numeric[]>,
    default: DEFAULT_ROW_WIDTH,
  },
});

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;

export default defineComponent({
  name,

  inheritAttrs: false,

  props: skeletonProps,

  setup(props, { slots, attrs }) {
    const renderAvatar = () => {
      if (props.avatar) {
        return <SkeletonItem type={'avatar'} avatarSize={props.avatarSize} />;
      }
    };

    const renderTitle = () => {
      if (props.title) {
        return <SkeletonItem type={'title'} titleWidth={props.titleWidth} />;
      }
    };

    const getRowWidth = (index: number) => {
      const { rowWidth } = props;

      if (rowWidth === DEFAULT_ROW_WIDTH && index === +props.row - 1) {
        return DEFAULT_LAST_ROW_WIDTH;
      }

      if (Array.isArray(rowWidth)) {
        return rowWidth[index];
      }

      return rowWidth;
    };

    const renderRows = () =>
      Array(+props.row)
        .fill('')
        .map((_, i) => (
          <SkeletonItem
            key={i}
            type={'cell'}
            rowWidth={addUnit(getRowWidth(i))}
          />
        ));

    const renderContents = () => {
      if (slots.template) {
        return slots.template();
      }

      return (
        <>
          {renderAvatar()}
          <div class={bem('content')}>
            {renderTitle()}
            {renderRows()}
          </div>
        </>
      );
    };

    return () => {
      if (!props.loading) {
        return slots.default?.();
      }

      return (
        <div
          class={bem({ animate: props.animate, round: props.round })}
          {...attrs}
        >
          {renderContents()}
        </div>
      );
    };
  },
});
