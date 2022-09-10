import { defineComponent, type PropType, type ExtractPropTypes } from 'vue';
import {
  addUnit,
  truthProp,
  numericProp,
  getSizeStyle,
  makeStringProp,
  makeNumericProp,
  createNamespace,
  type Numeric,
} from '../utils';

const [name, bem] = createNamespace('skeleton');
const DEFAULT_ROW_WIDTH = '100%';
const DEFAULT_LAST_ROW_WIDTH = '60%';

export type SkeletonAvatarShape = 'square' | 'round';

export const skeletonProps = {
  row: makeNumericProp(0),
  title: Boolean,
  round: Boolean,
  avatar: Boolean,
  loading: truthProp,
  animate: truthProp,
  avatarSize: numericProp,
  titleWidth: numericProp,
  avatarShape: makeStringProp<SkeletonAvatarShape>('round'),
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
          <div
            class={bem('avatar', props.avatarShape)}
            style={getSizeStyle(props.avatarSize)}
          />
        );
      }
    };

    const renderTitle = () => {
      if (props.title) {
        return (
          <h3
            class={bem('title')}
            style={{ width: addUnit(props.titleWidth) }}
          />
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
          <div class={bem('row')} style={{ width: addUnit(getRowWidth(i)) }} />
        ));

    return () => {
      if (!props.loading) {
        return slots.default?.();
      }

      return (
        <div
          class={bem({ animate: props.animate, round: props.round })}
          {...attrs}
        >
          {renderAvatar()}
          <div class={bem('content')}>
            {renderTitle()}
            {renderRows()}
          </div>
        </div>
      );
    };
  },
});
