import { use } from '../utils';
import { emit, inherit } from '../utils/functional';

const [sfc, bem] = use('password-input');

function PasswordInput(h, props, slots, ctx) {
  const info = props.errorInfo || props.info;

  const Points = [];
  for (let i = 0; i < props.length; i++) {
    Points.push(
      <li class="van-hairline">
        <i style={{ visibility: props.value[i] ? 'visible' : 'hidden' }} />
      </li>
    );
  }

  return (
    <div class={bem()}>
      <ul
        class={[bem('security'), 'van-hairline--surround']}
        onTouchstart={event => {
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
  value: {
    type: String,
    default: ''
  },
  length: {
    type: Number,
    default: 6
  }
};

export default sfc(PasswordInput);
