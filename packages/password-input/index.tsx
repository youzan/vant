import { use, suffixPx } from '../utils';
import { emit, inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type PasswordInputProps = {
  mask: boolean;
  info?: string;
  value: string;
  length: number;
  gutter: number;
  errorInfo?: string;
};

const [sfc, bem] = use('password-input');

function PasswordInput(
  h: CreateElement,
  props: PasswordInputProps,
  slots: DefaultSlots,
  ctx: RenderContext<PasswordInputProps>
) {
  const info = props.errorInfo || props.info;

  const Points = [];
  for (let i = 0; i < props.length; i++) {
    const char = props.value[i];
    const showBorder = i !== 0 && !props.gutter;

    let style;
    if (i !== 0 && props.gutter) {
      style = { marginLeft: suffixPx(props.gutter) };
    }

    Points.push(
      <li class={{ 'van-hairline--left': showBorder }} style={style}>
        {props.mask ? <i style={{ visibility: char ? 'visible' : 'hidden' }} /> : char}
      </li>
    );
  }

  return (
    <div class={bem()}>
      <ul
        class={[bem('security'), { 'van-hairline--surround': !props.gutter }]}
        onTouchstart={(event: TouchEvent) => {
          event.stopPropagation();
          emit(ctx, 'focus', event);
        }}
        {...inherit(ctx, true)}
      >
        {Points}
      </ul>
      {info && <div class={bem(props.errorInfo ? 'error-info' : 'info')}>{info}</div>}
    </div>
  );
}

PasswordInput.props = {
  info: String,
  errorInfo: String,
  gutter: [String, Number],
  mask: {
    type: Boolean,
    default: true
  },
  value: {
    type: String,
    default: ''
  },
  length: {
    type: Number,
    default: 6
  }
};

export default sfc<PasswordInputProps>(PasswordInput);
