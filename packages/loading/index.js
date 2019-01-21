import { use } from '../utils';

const [sfc, bem] = use('loading');
const DEFAULT_COLOR = '#c9c9c9';

export default sfc({
  props: {
    size: String,
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: DEFAULT_COLOR
    }
  },

  render(h) {
    const { color, size, type } = this;

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
      <div class={bem([type, colorType])} style={style}>
        <span class={bem('spinner', type)}>
          {Spin}
          {Circular}
        </span>
      </div>
    );
  }
});
