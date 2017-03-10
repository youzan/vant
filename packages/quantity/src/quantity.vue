<template>
  <div class="zan-quantity">
    <button
      @click="handleChange('minus')"
      class="zan-quantity__stepper zan-quantity__minus"
      :class="{
        'zan-quantity__minus--disabled': isMinusDisabled
      }">
    </button>
    <input type="text" class="zan-quantity__input" :value="currentValue" @input="handleInputChange" :disabled="disabled">
    <button
      @click="handleChange('plus')"
      class="zan-quantity__stepper zan-quantity__plus"
      :class="{
        'zan-quantity__plus--disabled': isPlusDisabled
      }">
    </button>
  </div>
</template>

<script>
export default {
  name: 'zan-quantity',

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
    return {
      currentValue: this.value ? +this.value : +this.defaultValue
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
      this.$emit('input', +val);
    },
    value(val) {
      if (val) {
        this.currentValue = +val;
      }
    }
  },

  methods: {
    handleInputChange(event) {
      let val = +event.target.value;
      const max = +this.max;
      const min = +this.min;

      if (val > max) {
        val = max;
      } else if (val < min) {
        val = min;
      }

      this.currentValue = val;
    },
    handleChange(type) {
      if ((this.isMinusDisabled && type === 'minus') || (this.isPlusDisabled && type === 'plus')) {
        return;
      }

      const step = +this.step;
      const currentValue = +this.currentValue;
      this.currentValue = type === 'minus' ? (currentValue - step) : (currentValue + step);
      this.$emit('change', this.currentValue);
    }
  }
};
</script>
