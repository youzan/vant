import { createNamespace, addUnit } from '../utils';
import { TouchMixin } from '../mixins/touch';
import { preventDefault } from '../utils/dom/event';

const [createComponent, bem] = createNamespace('slider');

export default createComponent({
  mixins: [TouchMixin],

  props: {
    disabled: Boolean,
    vertical: Boolean,
    activeColor: String,
    inactiveColor: String,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: [Number, String],
      default: 2
    },
    segment: {
      type: Array,
      default: null
    }
  },

  computed: {
    range() {
      return this.max - this.min;
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
        const evt = event.touches[0];
        const ele = event.target;
        this.dragStartPos = this.vertical ? evt.clientY : evt.clientX;
        this.dragStartPos -= (this.vertical ? ele.clientHeight : ele.clientWidth);
        this.$emit('drag-start');
      }

      preventDefault(event, true);
      this.touchMove(event);
      this.dragStatus = 'draging';

      const rect = this.$el.getBoundingClientRect();
      const delta = this.vertical ? this.deltaY : this.deltaX;
      const total = this.vertical ? rect.height : rect.width;
      const diff = (delta / total) * this.range;

      this.newValue = this.segment ? this.getValue((this.dragStartPos + delta) / total) : (this.startValue + diff);
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
      const delta = this.vertical ? event.clientY - rect.top : event.clientX - rect.left;
      const total = this.vertical ? rect.height : rect.width;
      const value = this.segment ? this.getValue(delta / total) : ((delta / total) * this.range + this.min);

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
        Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step
      );
    },

    getValue (position) {
      position = position < 0 ? 0 : position > 1 ? 1 : position;
      const segment = this.segmentSet.concat([]);
      const range = segment.findIndex(item => position < item[0]);
      const start = range > 0 ? segment[range - 1] : segment[0];
      const end = range > 0 ? segment[range] : segment.pop();
      const pos = (position - start[0]) / (end[0] - start[0]);
      const value = start[1] + (end[1] - start[1]) * pos;

      return Math.floor(value);
    },

    getPosition (value) {
      const segment = this.segmentSet.concat([]);
      const range = segment.findIndex(item => value < item[1]);
      const start = range > 0 ? segment[range - 1] : segment[0];
      const end = range > 0 ? segment[range] : segment.pop();
      const pos = (value - start[1]) / (end[1] - start[1]);
      const position = start[0] + (end[0] - start[0]) * pos;

      return position * 100;
    }
  },

  created() {
    if (this.segment !== null) {
      this.segmentSet = ([[0, this.min]]).concat(this.segment);
      this.segmentSet.push([1, this.max]);
    }
  },

  render() {
    const { vertical } = this;
    const style = {
      background: this.inactiveColor
    };

    const mainAxis = vertical ? 'height' : 'width';
    const crossAxis = vertical ? 'width' : 'height';
    const pos = this.segment ? this.getPosition(this.value) : (((this.value - this.min) * 100) / this.range);

    const barStyle = {
      [mainAxis]: `${pos}%`,
      [crossAxis]: addUnit(this.barHeight),
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
