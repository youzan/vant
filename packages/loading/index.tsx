import { use } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type LoadingProps = {
  size?: string;
  type: string;
  color: string;
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

  const colorType = color === 'white' || color === 'black' ? color : '';

  const style = {
    color: color === 'black' ? DEFAULT_COLOR : color,
    width: size,
    height: size
  };

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

  return (
    <div class={bem([type, colorType])} style={style} {...inherit(ctx, true)}>
      <span class={bem('spinner', type)}>
        {Spin}
        {Circular}
      </span>
    </div>
  );
}

Loading.props = {
  size: String,
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
