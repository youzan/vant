import { use } from '../utils';
import { emit, inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type PasswordInputProps = {
  mask: boolean;
  info?: string;
  value: string;
  length: number;
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
    Points.push(
      <li class="van-hairline">
        {props.mask ? (
          <i style={{ visibility: char ? 'visible' : 'hidden' }} />
        ) : (
          char
        )}
      </li>
    );
  }

  return (
    <div class={bem()}>
      <ul
        class={[bem('security'), 'van-hairline--surround']}
        onTouchstart={(event: TouchEvent) => {
          event.stopPropagation();
          emit(ctx, 'focus', event);
        }}
        {...inherit(ctx, true)}
      >
        {Points}
      </ul>
      {info && (
        <div class={bem(props.errorInfo ? 'error-info' : 'info')}>{info}</div>
      )}
    </div>
  );
}

PasswordInput.props = {
  info: String,
  errorInfo: String,
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
