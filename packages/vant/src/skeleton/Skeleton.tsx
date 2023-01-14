import { defineComponent, type PropType, type ExtractPropTypes } from 'vue';

// Utils
import {
  addUnit,
  truthProp,
  numericProp,
  makeStringProp,
  makeNumericProp,
  createNamespace,
  type Numeric,
} from '../utils';

// Components
import SkeletonTitle from '../skeleton-title';
import SkeletonAvatar from '../skeleton-avatar';
import SkeletonParagraph, { DEFAULT_ROW_WIDTH } from '../skeleton-paragraph';

// Types
import type { SkeletonAvatarShape } from '../skeleton-avatar';

const [name, bem] = createNamespace('skeleton');
const DEFAULT_LAST_ROW_WIDTH = '60%';

export const skeletonProps = {
  row: makeNumericProp(0),
  round: Boolean,
  title: Boolean,
  titleWidth: numericProp,
  avatar: Boolean,
  avatarSize: numericProp,
  avatarShape: makeStringProp<SkeletonAvatarShape>('round'),
  loading: truthProp,
  animate: truthProp,
  rowWidth: {
    type: [Number, String, Array] as PropType<Numeric | Numeric[]>,
    default: DEFAULT_ROW_WIDTH,
  },
};

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
          <SkeletonTitle round={props.round} titleWidth={props.titleWidth} />
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
