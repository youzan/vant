<template>
  <div :class="b()">
    <button
      :class="b('minus', { disabled: minusDisabled })"
      @click="onChange('minus')"
    />
    <input
      type="number"
      :class="b('input')"
      :value="currentValue"
      :disabled="disabled || disableInput"
      @input="onInput"
      @keypress="onKeypress"
    >
    <button
      :class="b('plus', { disabled: plusDisabled })"
      @click="onChange('plus')"
    />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'stepper',

  props: {
    value: {},
    integer: Boolean,
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },

  data() {
    let value = this.value ? +this.value : +this.defaultValue;
    const correctedValue = this.correctValue(value);
    if (value !== correctedValue) {
      value = correctedValue;
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },

  computed: {
    minusDisabled() {
      const min = +this.min;
      const step = +this.step;
      const currentValue = +this.currentValue;
      return min === currentValue || (currentValue - step) < min || this.disabled;
    },

    plusDisabled() {
      const max = +this.max;
      const step = +this.step;
      const currentValue = +this.currentValue;
      return max === currentValue || (currentValue + step) > max || this.disabled;
    }
  },

  watch: {
    value(val) {
      if (val !== '') {
        val = this.correctValue(+val);
        if (val !== this.currentValue) {
          this.currentValue = val;
        }
      }
    }
  },

  methods: {
    correctValue(value) {
      return isNaN(value)
        ? this.min
        : Math.max(this.min, Math.min(this.max, value));
    },

    onInput(event) {
      const { value } = event.target;
      this.currentValue = value ? this.correctValue(+value) : value;
      event.target.value = this.currentValue;
      this.emitInput();
    },

    onChange(type) {
      if ((this.minusDisabled && type === 'minus') || (this.plusDisabled && type === 'plus')) {
        this.$emit('overlimit', type);
        return;
      }

      const step = +this.step;
      const currentValue = +this.currentValue;
      this.currentValue = type === 'minus' ? (currentValue - step) : (currentValue + step);
      this.emitInput();
      this.$emit(type);
    },

    onKeypress(event) {
      if (this.integer && event.keyCode === 46) {
        event.preventDefault();
      }
    },

    emitInput() {
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
    }
  }
});
</script>
