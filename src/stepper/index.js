import { createNamespace, isDef, addUnit } from '../utils';
import { resetScroll } from '../utils/dom/reset-scroll';
import { preventDefault } from '../utils/dom/event';
import { formatNumber } from '../utils/format/number';
import { isNaN } from '../utils/validate/number';
import { FieldMixin } from '../mixins/field';

const [createComponent, bem] = createNamespace('stepper');

const LONG_PRESS_START_TIME = 600;
const LONG_PRESS_INTERVAL = 200;

function equal(value1, value2) {
  return String(value1) === String(value2);
}

// add num and avoid float number
function add(num1, num2) {
  const cardinal = 10 ** 10;
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

export default createComponent({
  mixins: [FieldMixin],

  props: {
    value: null,
    theme: String,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    decimalLength: [Number, String],
    name: {
      type: [Number, String],
      default: '',
    },
    min: {
      type: [Number, String],
      default: 1,
    },
    max: {
      type: [Number, String],
      default: Infinity,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    defaultValue: {
      type: [Number, String],
      default: 1,
    },
    showPlus: {
      type: Boolean,
      default: true,
    },
    showMinus: {
      type: Boolean,
      default: true,
    },
    longPress: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    const defaultValue = isDef(this.value) ? this.value : this.defaultValue;
    const value = this.format(defaultValue);

    if (!equal(value, this.value)) {
      this.$emit('input', value);
    }

    return {
      currentValue: value,
    };
  },

  computed: {
    minusDisabled() {
      return (
        this.disabled || this.disableMinus || this.currentValue <= this.min
      );
    },

    plusDisabled() {
      return this.disabled || this.disablePlus || this.currentValue >= this.max;
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
      if (this.buttonSize) {
        const size = addUnit(this.buttonSize);

        return {
          width: size,
          height: size,
        };
      }
    },
  },

  watch: {
    max: 'check',
    min: 'check',
    integer: 'check',
    decimalLength: 'check',

    value(val) {
      if (!equal(val, this.currentValue)) {
        this.currentValue = this.format(val);
      }
    },

    currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val, { name: this.name });
    },
  },

  methods: {
    check() {
      const val = this.format(this.currentValue);
      if (!equal(val, this.currentValue)) {
        this.currentValue = val;
      }
    },

    // formatNumber illegal characters
    formatNumber(value) {
      return formatNumber(String(value), !this.integer);
    },

    format(value) {
      value = this.formatNumber(value);

      // format range
      value = value === '' ? 0 : +value;
      value = isNaN(value) ? this.min : value;
      value = Math.max(Math.min(this.max, value), this.min);

      // format decimal
      if (isDef(this.decimalLength)) {
        value = value.toFixed(this.decimalLength);
      }

      return value;
    },

    onInput(event) {
      const { value } = event.target;

      let formatted = this.formatNumber(value);

      // limit max decimal length
      if (isDef(this.decimalLength) && formatted.indexOf('.') !== -1) {
        const pair = formatted.split('.');
        formatted = `${pair[0]}.${pair[1].slice(0, this.decimalLength)}`;
      }

      if (!equal(value, formatted)) {
        event.target.value = formatted;
      }

      this.emitChange(formatted);
    },

    emitChange(value) {
      if (this.asyncChange) {
        this.$emit('input', value);
        this.$emit('change', value, { name: this.name });
      } else {
        this.currentValue = value;
      }
    },

    onChange() {
      const { type } = this;

      if (this[`${type}Disabled`]) {
        this.$emit('overlimit', type);
        return;
      }

      const diff = type === 'minus' ? -this.step : +this.step;

      const value = this.format(add(+this.currentValue, diff));

      this.emitChange(value);
      this.$emit(type);
    },

    onFocus(event) {
      // readonly not work in lagacy mobile safari
      if (this.disableInput && this.$refs.input) {
        this.$refs.input.blur();
      } else {
        this.$emit('focus', event);
      }
    },

    onBlur(event) {
      const value = this.format(event.target.value);
      event.target.value = value;
      this.currentValue = value;
      this.$emit('blur', event);

      resetScroll();
    },

    longPressStep() {
      this.longPressTimer = setTimeout(() => {
        this.onChange();
        this.longPressStep(this.type);
      }, LONG_PRESS_INTERVAL);
    },

    onTouchStart() {
      if (!this.longPress) {
        return;
      }

      clearTimeout(this.longPressTimer);
      this.isLongPress = false;

      this.longPressTimer = setTimeout(() => {
        this.isLongPress = true;
        this.onChange();
        this.longPressStep();
      }, LONG_PRESS_START_TIME);
    },

    onTouchEnd(event) {
      if (!this.longPress) {
        return;
      }

      clearTimeout(this.longPressTimer);

      if (this.isLongPress) {
        preventDefault(event);
      }
    },
  },

  render() {
    const createListeners = (type) => ({
      on: {
        click: () => {
          this.type = type;
          this.onChange();
        },
        touchstart: () => {
          this.type = type;
          this.onTouchStart();
        },
        touchend: this.onTouchEnd,
        touchcancel: this.onTouchEnd,
      },
    });

    return (
      <div class={bem([this.theme])}>
        <button
          vShow={this.showMinus}
          type="button"
          style={this.buttonStyle}
          class={bem('minus', { disabled: this.minusDisabled })}
          {...createListeners('minus')}
        />
        <input
          ref="input"
          type={this.integer ? 'tel' : 'text'}
          role="spinbutton"
          class={bem('input')}
          value={this.currentValue}
          style={this.inputStyle}
          disabled={this.disabled}
          readonly={this.disableInput}
          // set keyboard in mordern browers
          inputmode={this.integer ? 'numeric' : 'decimal'}
          aria-valuemax={this.max}
          aria-valuemin={this.min}
          aria-valuenow={this.currentValue}
          onInput={this.onInput}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <button
          vShow={this.showPlus}
          type="button"
          style={this.buttonStyle}
          class={bem('plus', { disabled: this.plusDisabled })}
          {...createListeners('plus')}
        />
      </div>
    );
  },
});
