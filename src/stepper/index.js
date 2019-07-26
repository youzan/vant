import { createNamespace, isDef, addUnit } from '../utils';
import { resetScroll } from '../utils/dom/reset-scroll';

const [createComponent, bem] = createNamespace('stepper');

const LONG_PRESS_START_TIME = 600;
const LONG_PRESS_INTERVAL = 200;

export default createComponent({
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disableInput: Boolean,
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    defaultValue: {
      type: [Number, String],
      default: 1
    }
  },

  data() {
    const value = this.range(isDef(this.value) ? this.value : this.defaultValue);
    if (value !== +this.value) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },

  computed: {
    minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },

    plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    },

    inputStyle() {
      const style = {};

      if (this.inputWidth) {
        style.width = addUnit(this.inputWidth);
      }

      if (this.buttonSize) {
        style.height = addUnit(this.buttonSize);
      }

      return style;
    },

    buttonStyle() {
      const style = {};

      if (this.buttonSize) {
        const size = addUnit(this.buttonSize);
        style.width = size;
        style.height = size;
      }

      return style;
    }
  },

  watch: {
    value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val);
      }
    },

    currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    }
  },

  methods: {
    // filter illegal characters
    format(value) {
      value = String(value).replace(/[^0-9.-]/g, '');
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value;
    },

    // limit value range
    range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min);
    },

    onInput(event) {
      const { value } = event.target;
      const formatted = this.format(value);

      if (this.asyncChange) {
        event.target.value = this.currentValue;
        this.$emit('input', formatted);
        this.$emit('change', formatted);
      } else {
        if (+value !== formatted) {
          event.target.value = formatted;
        }
        this.currentValue = formatted;
      }
    },

    onChange() {
      const { type } = this;

      if (this[`${type}Disabled`]) {
        this.$emit('overlimit', type);
        return;
      }

      const diff = type === 'minus' ? -this.step : +this.step;
      const value = Math.round((this.currentValue + diff) * 100) / 100;

      if (this.asyncChange) {
        this.$emit('input', value);
        this.$emit('change', value);
      } else {
        this.currentValue = this.range(value);
      }

      this.$emit(type);
    },

    onFocus(event) {
      this.$emit('focus', event);
    },

    onBlur(event) {
      this.currentValue = this.range(this.currentValue);
      this.$emit('blur', event);

      // fix edge case when input is empty and min is 0
      if (this.currentValue === 0) {
        event.target.value = this.currentValue;
      }

      resetScroll();
    },

    longPressStep() {
      this.longPressTimer = setTimeout(() => {
        this.onChange(this.type);
        this.longPressStep(this.type);
      }, LONG_PRESS_INTERVAL);
    },

    onTouchStart() {
      clearTimeout(this.longPressTimer);
      this.isLongPress = false;

      this.longPressTimer = setTimeout(() => {
        this.isLongPress = true;
        this.onChange();
        this.longPressStep();
      }, LONG_PRESS_START_TIME);
    },

    onTouchEnd(event) {
      clearTimeout(this.longPressTimer);

      if (this.isLongPress) {
        event.preventDefault();
      }
    }
  },

  render() {
    const createListeners = type => ({
      on: {
        click: () => {
          this.type = type;
          this.onChange();
        },
        touchstart: () => {
          this.type = type;
          this.onTouchStart(type);
        },
        touchend: this.onTouchEnd,
        touchcancel: this.onTouchEnd
      }
    });

    return (
      <div class={bem()}>
        <button
          style={this.buttonStyle}
          class={bem('minus', { disabled: this.minusDisabled })}
          {...createListeners('minus')}
        />
        <input
          type="number"
          role="spinbutton"
          class={bem('input')}
          value={this.currentValue}
          aria-valuemax={this.max}
          aria-valuemin={this.min}
          aria-valuenow={this.currentValue}
          disabled={this.disabled || this.disableInput}
          style={this.inputStyle}
          onInput={this.onInput}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <button
          style={this.buttonStyle}
          class={bem('plus', { disabled: this.plusDisabled })}
          {...createListeners('plus')}
        />
      </div>
    );
  }
});
