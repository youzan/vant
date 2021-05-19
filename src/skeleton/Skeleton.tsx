import { PropType, defineComponent } from 'vue';
import { addUnit, truthProp, getSizeStyle, createNamespace } from '../utils';

const [name, bem] = createNamespace('skeleton');
const DEFAULT_ROW_WIDTH = '100%';
const DEFAULT_LAST_ROW_WIDTH = '60%';

export default defineComponent({
  name,

  props: {
    title: Boolean,
    round: Boolean,
    avatar: Boolean,
    img: Boolean,
    loading: truthProp,
    animate: truthProp,
    avatarSize: [Number, String],
    titleWidth: [Number, String],
    imgWidth: [Number, String],
    row: {
      type: [Number, String],
      default: 0,
    },
    avatarShape: {
      type: String as PropType<'square' | 'round'>,
      default: 'round',
    },
    rowWidth: {
      type: [Number, String, Array] as PropType<
        number | string | (number | string)[]
      >,
      default: DEFAULT_ROW_WIDTH,
    },
  },

  setup(props, { slots }) {
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
      Array(props.row)
        .fill('')
        .map((_, i) => (
          <div class={bem('row')} style={{ width: addUnit(getRowWidth(i)) }} />
        ));

    const renderImg = () => {
      if (props.img) {
        return (
          <svg
            class={bem('img')}
            style={{ width: addUnit(props.imgWidth) }}
            viewBox="0 0 257 86"
          >
            <path d="M100.641 65.4391C102.158 66.946 104.586 66.9495 106.108 65.447L171.265 1.12458C172.784 -0.374859 175.205 -0.37486 176.724 1.12458L255.81 79.197C258.324 81.6785 256.59 85.9993 253.081 85.9993L121.35 85.9997L3.91944 86C0.415352 86 -1.32103 81.6905 1.18185 79.2056L55.1066 25.668C56.6275 24.158 59.0609 24.158 60.5818 25.668L100.641 65.4391Z" />
          </svg>
        );
      }
    };

    return () => {
      if (!props.loading) {
        return slots.default?.();
      }

      return (
        <div class={bem({ animate: props.animate, round: props.round })}>
          {renderAvatar()}
          <div class={bem('content')}>
            {renderTitle()}
            {renderImg()}
            {renderRows()}
          </div>
        </div>
      );
    };
  },
});
