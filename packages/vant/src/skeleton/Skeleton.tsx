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
import SkeletonTitle, { skeletonTitleProps } from './Title';
import SkeletonAvatar, { skeletonAvatarProps } from './Avatar';
import SkeletonParagraph, {
  DEFAULT_ROW_WIDTH,
  skeletonParagraphProps,
} from './Paragraph';

const [name, bem] = createNamespace('skeleton');
const DEFAULT_LAST_ROW_WIDTH = '60%';

export const skeletonProps = extend(
  {},
  skeletonTitleProps,
  skeletonAvatarProps,
  skeletonParagraphProps,
  {
    row: makeNumericProp(0),
    title: Boolean,
    avatar: Boolean,
    loading: truthProp,
    animate: truthProp,
    rowWidth: {
      type: [Number, String, Array] as PropType<Numeric | Numeric[]>,
      default: DEFAULT_ROW_WIDTH,
    },
  }
);

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;

export default defineComponent({
  name,

  inheritAttrs: false,

  props: skeletonProps,

  setup(props, { slots, attrs }) {
    const renderAvatar = () => {
      if (props.avatar) {
        return (
          <SkeletonAvatar
            avatarShape={props.avatarShape}
            avatarSize={props.avatarSize}
          />
        );
      }
    };

    const renderTitle = () => {
      if (props.title) {
        return (
          <SkeletonTitle titleWidth={props.titleWidth} round={props.round} />
        );
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
          <SkeletonParagraph
            key={i}
            round={props.round}
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
