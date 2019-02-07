import { use } from '../utils';
import Loading from '../loading';
import SwitchMixin from '../mixins/switch';

const [sfc, bem] = use('switch');

export default sfc({
  mixins: [SwitchMixin],

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
