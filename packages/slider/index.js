import { use, isDef } from '../utils';
import { TouchMixin } from '../mixins/touch';
import { preventDefault } from '../utils/event';

const [sfc, bem] = use('slider');

export default sfc({
  mixins: [TouchMixin],

  props: {
    min: Number,
    value: Number,
    disabled: Boolean,
    vertical: Boolean,
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
      if (this.disabled) {
        return;
      }

      this.touchStart(event);
      this.startValue = this.format(this.value);
      this.dragStatus = 'start';
    },

    onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'start') {
        this.dragStatus = 'draging';
        this.$emit('drag-start');
      }

      preventDefault(event, true);
      this.touchMove(event);

      const rect = this.$el.getBoundingClientRect();
      const delta = this.vertical ? this.deltaY : this.deltaX;
      const total = this.vertical ? rect.height : rect.width;
      const diff = (delta / total) * 100;

      this.newValue = this.startValue + diff;
      this.updateValue(this.newValue);
    },

    onTouchEnd() {
      if (this.disabled) {
        return;
      }

      if (isDef(this.newValue)) {
        this.updateValue(this.newValue, true);
      }

      if (this.dragStatus === 'draging') {
        this.$emit('drag-end');
        this.dragStatus = '';
      }
    },

    onClick(event) {
      event.stopPropagation();

      if (this.disabled) return;

      const rect = this.$el.getBoundingClientRect();
      const delta = this.vertical ? event.clientY - rect.top : event.clientX - rect.left;
      const total = this.vertical ? rect.height : rect.width;
      const value = (delta / total) * 100;

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
      return (
        Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step
      );
    }
  },

  render(h) {
    const { vertical } = this;
    const style = {
      background: this.inactiveColor
    };

    const mainAxis = vertical ? 'height' : 'width';
    const crossAxis = vertical ? 'width' : 'height';

    const barStyle = {
      [mainAxis]: `${this.format(this.value)}%`,
      [crossAxis]: this.barHeight,
      background: this.activeColor
    };

    return (
      <div
        style={style}
        class={bem({ disabled: this.disabled, vertical })}
        onClick={this.onClick}
      >
        <div class={bem('bar')} style={barStyle}>
          <div
            role="slider"
            tabindex={this.disabled ? -1 : 0}
            aria-valuemin={this.min}
            aria-valuenow={this.value}
            aria-valuemax={this.max}
            aria-orientation={this.vertical ? 'vertical' : 'horizontal'}
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
