import { use } from '../utils';
import { TouchMixin } from '../mixins/touch';

const [sfc, bem] = use('slider');

export default sfc({
  mixins: [TouchMixin],

  props: {
    min: Number,
    value: Number,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },

  methods: {
    onTouchStart(event) {
      if (this.disabled) return;

      this.touchStart(event);
      this.startValue = this.format(this.value);
    },

    onTouchMove(event) {
      event.preventDefault();
      event.stopPropagation();

      if (this.disabled) return;

      this.touchMove(event);
      const rect = this.$el.getBoundingClientRect();
      const diff = (this.deltaX / rect.width) * 100;
      this.updateValue(this.startValue + diff);
    },

    onTouchEnd() {
      if (this.disabled) return;
      this.updateValue(this.value, true);
    },

    onClick(event) {
      event.stopPropagation();

      if (this.disabled) return;

      const rect = this.$el.getBoundingClientRect();
      const value = ((event.clientX - rect.left) / rect.width) * 100;
      this.updateValue(value, true);
    },

    updateValue(value, end) {
      value = this.format(value);
      this.$emit('input', value);

      if (end) {
        this.$emit('change', value);
      }
    },

    format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  },

  render(h) {
    const style = {
      background: this.inactiveColor
    };

    const barStyle = {
      width: `${this.format(this.value)}%`,
      height: this.barHeight,
      background: this.activeColor
    };

    return (
      <div style={style} class={bem({ disabled: this.disabled })} onClick={this.onClick}>
        <div class={bem('bar')} style={barStyle}>
          <div
            class={bem('button-wrapper')}
            onTouchstart={this.onTouchStart}
            onTouchmove={this.onTouchMove}
            onTouchend={this.onTouchEnd}
            onTouchcancel={this.onTouchEnd}
          >
            {this.slots('button') || <div class={bem('button')} />}
          </div>
        </div>
      </div>
    );
  }
});
