<template>
  <div :class="b({ disabled })" @click.stop="onClick">
    <div :class="b('bar')" :style="barStyle">
      <span
        :class="b('button')"
        @touchstart="onTouchStart"
        @touchmove.prevent.stop="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
      />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import Touch from '../mixins/touch';

export default create({
  name: 'slider',

  mixins: [Touch],

  props: {
    disabled: Boolean,
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
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
      type: String,
      default: '2px'
    }
  },

  computed: {
    barStyle() {
      return {
        width: this.format(this.value) + '%',
        height: this.barHeight
      };
    }
  },

  methods: {
    onTouchStart(event) {
      if (this.disabled) return;

      this.touchStart(event);
      this.startValue = this.format(this.value);
    },

    onTouchMove(event) {
      if (this.disabled) return;

      this.touchMove(event);
      const rect = this.$el.getBoundingClientRect();
      const diff = this.deltaX / rect.width * 100;
      this.updateValue(this.startValue + diff);
    },

    onTouchEnd() {
      if (this.disabled) return;
      this.updateValue(this.value, true);
    },

    onClick(event) {
      if (this.disabled) return;

      const rect = this.$el.getBoundingClientRect();
      const value = (event.clientX - rect.left) / rect.width * 100;
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
      return (Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step);
    }
  }
});
</script>
