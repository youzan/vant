<template>
  <div
    :class="b({ disabled })"
    :style="style"
    @click.stop="onClick"
  >
    <div
      :class="b('bar')"
      :style="barStyle"
    >
      <div
        :class="b('button-wrapper')"
        @touchstart="onTouchStart"
        @touchmove.prevent.stop="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
      >
        <slot name="button">
          <div :class="b('button')" />
        </slot>
      </div>
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
    min: Number,
    value: Number,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },

  computed: {
    style() {
      return {
        background: this.inactiveColor
      };
    },

    barStyle() {
      return {
        width: this.format(this.value) + '%',
        height: this.barHeight,
        background: this.activeColor
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
