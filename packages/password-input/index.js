import { use } from '../utils';
import { emit } from '../utils/functional';

const [sfc, bem] = use('password-input');

export default sfc({
  functional: true,

  props: {
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
  },

  render(h, context) {
    const { props } = context;
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
            emit(context, 'focus', event);
          }}
          {...context.data}
        >
          {Points}
        </ul>
        {info && <div class={bem(props.errorInfo ? 'error-info' : 'info')}>{info}</div>}
      </div>
    );
  }
});
