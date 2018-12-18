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
      @blur="onBlur"
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
    value: null,
    integer: Boolean,
    disabled: Boolean,
    asyncChange: Boolean,
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
    const value = this.range(this.isDef(this.value) ? this.value : this.defaultValue);
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

      if (!this.asyncChange) {
        if (+value !== formatted) {
          event.target.value = formatted;
        }
        this.currentValue = formatted;
      } else {
        event.target.value = this.currentValue;
        this.$emit('input', formatted);
        this.$emit('change', formatted);
      }
    },

    onChange(type) {
      if (this[`${type}Disabled`]) {
        this.$emit('overlimit', type);
        return;
      }

      const diff = type === 'minus' ? -this.step : +this.step;
      const value = Math.round((this.currentValue + diff) * 100) / 100;

      if (!this.asyncChange) {
        this.currentValue = this.range(value);
      } else {
        this.$emit('input', value);
        this.$emit('change', value);
      }
      this.$emit(type);
    },

    onBlur(event) {
      this.currentValue = this.range(this.currentValue);
      this.$emit('blur', event);
    }
  }
});
</script>
