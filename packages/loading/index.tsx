import { use, suffixPx } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type LoadingProps = {
  type: 'circular' | 'spinner';
  size?: string | number;
  color: string;
  textSize?: string | number;
};

const [sfc, bem] = use('loading');
const DEFAULT_COLOR = '#c9c9c9';

function Loading(
  h: CreateElement,
  props: LoadingProps,
  slots: DefaultSlots,
  ctx: RenderContext<LoadingProps>
) {
  const { color, size, type } = props;

  const style: { [key: string]: string } = { color };
  if (size) {
    const iconSize = suffixPx(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  const Spin = [];
  if (type === 'spinner') {
    for (let i = 0; i < 12; i++) {
      Spin.push(<i />);
    }
  }

  const Circular = type === 'circular' && (
    <svg class={bem('circular')} viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" />
    </svg>
  );

  function Text() {
    if (slots.default) {
      const style = props.textSize && {
        fontSize: suffixPx(props.textSize)
      };

      return (
        <span class={bem('text')} style={style}>
          {slots.default()}
        </span>
      );
    }
  }

  return (
    <div class={bem([type])} {...inherit(ctx, true)}>
      <span class={bem('spinner', type)} style={style}>
        {Spin}
        {Circular}
      </span>
      {Text()}
    </div>
  );
}

Loading.props = {
  size: [String, Number],
  textSize: [String, Number],
  type: {
    type: String,
    default: 'circular'
  },
  color: {
    type: String,
    default: DEFAULT_COLOR
  }
};

export default sfc<LoadingProps>(Loading);
