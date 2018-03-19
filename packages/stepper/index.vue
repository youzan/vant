<template>
  <div class="van-stepper" :class="{ 'van-stepper--disabled': disabled }">
    <button
      class="van-stepper__stepper van-stepper__minus"
      :class="{ 'van-stepper__minus--disabled': isMinusDisabled }"
      @click="onChange('minus')"
    />
    <input
      type="number"
      class="van-stepper__input"
      :value="currentValue"
      :disabled="disabled || disableInput"
      @input="onInput"
    >
    <button
      class="van-stepper__stepper van-stepper__plus"
      :class="{ 'van-stepper__plus--disabled': isPlusDisabled }"
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
    isMinusDisabled() {
      const min = +this.min;
      const step = +this.step;
      const currentValue = +this.currentValue;
      return min === currentValue || (currentValue - step) < min || this.disabled;
    },

    isPlusDisabled() {
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
      if (Number.isNaN(value)) {
        value = this.min;
      } else {
        value = Math.max(this.min, value);
        value = Math.min(this.max, value);
      }

      return value;
    },

    onInput(event) {
      const { value } = event.target;
      this.currentValue = value ? this.correctValue(+value) : value;
      event.target.value = this.currentValue;
      this.emitInput();
    },

    onChange(type) {
      if ((this.isMinusDisabled && type === 'minus') || (this.isPlusDisabled && type === 'plus')) {
        this.$emit('overlimit', type);
        return;
      }

      const step = +this.step;
      const currentValue = +this.currentValue;
      this.currentValue = type === 'minus' ? (currentValue - step) : (currentValue + step);
      this.emitInput();
      this.$emit(type);
    },

    emitInput() {
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
    }
  }
});
</script>
