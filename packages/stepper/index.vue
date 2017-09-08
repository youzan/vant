<template>
  <div class="van-stepper" :class="{ 'van-stepper--disabled': disabled }">
    <button
      @click="handleChange('minus')"
      class="van-stepper__stepper van-stepper__minus"
      :class="{
        'van-stepper__minus--disabled': isMinusDisabled
      }">
    </button>
    <input
      type="text"
      class="van-stepper__input"
      :value="currentValue"
      @input="handleInputChange"
      :disabled="disabled">
    <button
      @click="handleChange('plus')"
      class="van-stepper__stepper van-stepper__plus"
      :class="{
        'van-stepper__plus--disabled': isPlusDisabled
      }">
    </button>
  </div>
</template>

<script>
export default {
  name: 'van-stepper',

  props: {
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    value: {},
    step: {
      type: [String, Number],
      default: 1
    },
    disabled: Boolean,
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
    currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    },
    value(val) {
      val = this.correctValue(+val);
      if (val !== this.currentValue) {
        this.currentValue = val;
      }
    }
  },

  methods: {
    // 纠正value值
    correctValue(value) {
      value = Math.max(this.min, value);
      value = Math.min(this.max, value);
      return value;
    },
    handleInputChange(event) {
      const val = +event.target.value;

      this.currentValue = this.correctValue(val);
    },
    handleChange(type) {
      if ((this.isMinusDisabled && type === 'minus') || (this.isPlusDisabled && type === 'plus')) {
        this.$emit('overlimit', type);
        return;
      }

      const step = +this.step;
      const currentValue = +this.currentValue;
      this.currentValue = type === 'minus' ? (currentValue - step) : (currentValue + step);
    }
  }
};
</script>
