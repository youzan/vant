// Utils
import { createNamespace, addUnit } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type LoadingType = 'circular' | 'spinner';

export type LoadingProps = {
  type: LoadingType;
  size?: string | number;
  color: string;
  vertical?: boolean;
  textSize?: string | number;
  textColor?: string;
};

const [createComponent, bem] = createNamespace('loading');

function LoadingIcon(h: CreateElement, props: LoadingProps) {
  if (props.type === 'spinner') {
    const Spin = [];
    for (let i = 0; i < 12; i++) {
      Spin.push(<i />);
    }
    return Spin;
  }

  return (
    <svg class={bem('circular')} viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" />
    </svg>
  );
}

function LoadingText(
  h: CreateElement,
  props: LoadingProps,
  slots: DefaultSlots
) {
  if (slots.default) {
    const style = {
      fontSize: addUnit(props.textSize),
      color: props.textColor ?? props.color,
    };

    return (
      <span class={bem('text')} style={style}>
        {slots.default()}
      </span>
    );
  }
}

function Loading(
  h: CreateElement,
  props: LoadingProps,
  slots: DefaultSlots,
  ctx: RenderContext<LoadingProps>
) {
  const { color, size, type } = props;

  const style: { [key: string]: string } = { color };
  if (size) {
    const iconSize = addUnit(size) as string;
    style.width = iconSize;
    style.height = iconSize;
  }

  return (
    <div
      class={bem([type, { vertical: props.vertical }])}
      {...inherit(ctx, true)}
    >
      <span class={bem('spinner', type)} style={style}>
        {LoadingIcon(h, props)}
      </span>
      {LoadingText(h, props, slots)}
    </div>
  );
}

Loading.props = {
  color: String,
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  textColor: String,
  type: {
    type: String,
    default: 'circular',
  },
};

export default createComponent<LoadingProps>(Loading);
