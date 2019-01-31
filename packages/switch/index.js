import { use } from '../utils';
import Loading from '../loading';

const [sfc, bem] = use('switch');

export default sfc({
  props: {
    value: null,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: null,
      default: true
    },
    inactiveValue: {
      type: null,
      default: false
    },
    size: {
      type: String,
      default: '30px'
    }
  },

  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        const checked = this.value === this.activeValue;
        const value = checked ? this.inactiveValue : this.activeValue;
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }
  },

  render(h) {
    const { value } = this;
    const style = {
      fontSize: this.size,
      backgroundColor: value ? this.activeColor : this.inactiveColor
    };

    return (
      <div
        class={bem({
          on: value === this.activeValue,
          disabled: this.disabled
        })}
        style={style}
        onClick={this.onClick}
      >
        <div class={bem('node')}>{this.loading && <Loading class={bem('loading')} />}</div>
      </div>
    );
  }
});
