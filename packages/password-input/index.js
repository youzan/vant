import { use } from '../utils';

const [sfc, bem] = use('password-input');

export default sfc({
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

  computed: {
    points() {
      const arr = [];
      for (let i = 0; i < this.length; i++) {
        arr[i] = this.value[i] ? 'visible' : 'hidden';
      }
      return arr;
    }
  },

  render(h) {
    const info = this.errorInfo || this.info;

    return (
      <div class={bem()}>
        <ul
          class={[bem('security'), 'van-hairline--surround']}
          onTouchstart={event => {
            event.stopPropagation();
            this.$emit('focus');
          }}
        >
          {this.points.map(visibility => (
            <li class="van-hairline">
              <i style={{ visibility }} />
            </li>
          ))}
        </ul>
        {info && <div class={bem(this.errorInfo ? 'error-info' : 'info')}>{info}</div>}
      </div>
    );
  }
});
