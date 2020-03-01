import { createNamespace, addUnit } from '../utils';
import { preventDefault } from '../utils/dom/event';
import { TouchMixin } from '../mixins/touch';
import { FieldMixin } from '../mixins/field';

const [createComponent, bem] = createNamespace('slider');

export default createComponent({
  mixins: [TouchMixin, FieldMixin],

  props: {
    disabled: Boolean,
    vertical: Boolean,
    barHeight: [Number, String],
    buttonSize: [Number, String],
    activeColor: String,
    inactiveColor: String,
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    value: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      dragStatus: '',
    };
  },

  computed: {
    range() {
      return this.max - this.min;
    },

    buttonStyle() {
      if (this.buttonSize) {
        const size = addUnit(this.buttonSize);
        return {
          width: size,
          height: size,
        };
      }
    },
  },

  created() {
    // format initial value
    this.updateValue(this.value);
  },

  mounted() {
    this.bindTouchEvent(this.$refs.wrapper);
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
        this.$emit('drag-start');
      }

      preventDefault(event, true);
      this.touchMove(event);
      this.dragStatus = 'draging';

      const rect = this.$el.getBoundingClientRect();
      const delta = this.vertical ? this.deltaY : this.deltaX;
      const total = this.vertical ? rect.height : rect.width;
      const diff = (delta / total) * this.range;

      this.newValue = this.startValue + diff;
      this.updateValue(this.newValue);
    },

    onTouchEnd() {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'draging') {
        this.updateValue(this.newValue, true);
        this.$emit('drag-end');
      }

      this.dragStatus = '';
    },

    onClick(event) {
      event.stopPropagation();

      if (this.disabled) return;

      const rect = this.$el.getBoundingClientRect();
      const delta = this.vertical
        ? event.clientY - rect.top
        : event.clientX - rect.left;
      const total = this.vertical ? rect.height : rect.width;
      const value = +this.min + (delta / total) * this.range;

      this.startValue = this.value;
      this.updateValue(value, true);
    },

    updateValue(value, end) {
      value = this.format(value);

      if (value !== this.value) {
        this.$emit('input', value);
      }

      if (end && value !== this.startValue) {
        this.$emit('change', value);
      }
    },

    format(value) {
      return (
        Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) *
        this.step
      );
    },
  },

  render() {
    const { vertical } = this;
    const style = {
      background: this.inactiveColor,
    };

    const mainAxis = vertical ? 'height' : 'width';
    const crossAxis = vertical ? 'width' : 'height';

    const barStyle = {
      [mainAxis]: `${((this.value - this.min) * 100) / this.range}%`,
      [crossAxis]: addUnit(this.barHeight),
      background: this.activeColor,
    };

    if (this.dragStatus) {
      barStyle.transition = 'none';
    }

    return (
      <div
        style={style}
        class={bem({ disabled: this.disabled, vertical })}
        onClick={this.onClick}
      >
        <div class={bem('bar')} style={barStyle}>
          <div
            ref="wrapper"
            role="slider"
            tabindex={this.disabled ? -1 : 0}
            aria-valuemin={this.min}
            aria-valuenow={this.value}
            aria-valuemax={this.max}
            aria-orientation={this.vertical ? 'vertical' : 'horizontal'}
            class={bem('button-wrapper')}
          >
            {this.slots('button') || (
              <div class={bem('button')} style={this.buttonStyle} />
            )}
          </div>
        </div>
      </div>
    );
  },
});
