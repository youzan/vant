import { use, suffixPx } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type SkeletonProps = {
  row: number;
  title?: boolean;
  avatar?: boolean;
  loading: boolean;
  animate: boolean;
  avatarSize: string;
  avatarShape: 'square' | 'round';
  titleWidth: number | string;
  rowWidth: number | string | (number | string)[];
};

const [sfc, bem] = use('skeleton');
const DEFAULT_ROW_WIDTH = '100%';
const DEFAULT_LAST_ROW_WIDTH = '60%';

function Skeleton(
  h: CreateElement,
  props: SkeletonProps,
  slots: DefaultSlots,
  ctx: RenderContext
) {
  if (!props.loading) {
    return slots.default && slots.default();
  }

  function Title() {
    if (props.title) {
      return <h3 class={bem('title')} style={{ width: suffixPx(props.titleWidth) }} />;
    }
  }

  function Rows() {
    const Rows = [];
    const { rowWidth } = props;

    function getRowWidth(index: number) {
      if (rowWidth === DEFAULT_ROW_WIDTH && index === props.row - 1) {
        return DEFAULT_LAST_ROW_WIDTH;
      }

      if (Array.isArray(rowWidth)) {
        return rowWidth[index];
      }

      return rowWidth;
    }

    for (let i = 0; i < props.row; i++) {
      Rows.push(<div class={bem('row')} style={{ width: suffixPx(getRowWidth(i)) }} />);
    }

    return Rows;
  }

  function Avatar() {
    if (props.avatar) {
      const size = suffixPx(props.avatarSize);
      return (
        <div
          class={bem('avatar', props.avatarShape)}
          style={{ width: size, height: size }}
        />
      );
    }
  }

  return (
    <div class={bem({ animate: props.animate })} {...inherit(ctx)}>
      {Avatar()}
      <div class={bem('content')}>
        {Title()}
        {Rows()}
      </div>
    </div>
  );
}

Skeleton.props = {
  row: Number,
  title: Boolean,
  avatar: Boolean,
  loading: {
    type: Boolean,
    default: true
  },
  animate: {
    type: Boolean,
    default: true
  },
  avatarSize: {
    type: String,
    default: '32px'
  },
  avatarShape: {
    type: String,
    default: 'round'
  },
  titleWidth: {
    type: [Number, String],
    default: '40%'
  },
  rowWidth: {
    type: [Number, String, Array],
    default: DEFAULT_ROW_WIDTH
  }
};

export default sfc<SkeletonProps>(Skeleton);
