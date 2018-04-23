<template>
  <div
    :class="b({ disabled })"
    :style="style"
    @click.stop="onClick"
  >
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
    sliderWidth() {
      const rect = this.$el.getBoundingClientRect();
      return rect['width'];
    },

    style() {
      return {
        height: this.barHeight
      };
    },

    barStyle() {
      return {
        width: this.format(this.value) + '%'
      };
    }
  },

  methods: {
    onTouchStart(event) {
      if (this.disabled) return;

      this.draging = true;
      this.touchStart(event);
      this.startValue = this.format(this.value);
    },

    onTouchMove(event) {
      if (this.draging) {
        this.touchMove(event);
        const diff = this.deltaX / this.sliderWidth * 100;
        this.newValue = this.startValue + diff;
        this.updateValue(this.newValue);
      }
    },

    onTouchEnd() {
      if (this.draging) {
        this.$nextTick(() => {
          this.draging = false;
          this.updateValue(this.newValue, true);
        });
      }
    },

    onClick(e) {
      if (this.disabled || this.draging) return;

      const sliderRect = this.$el.getBoundingClientRect();
      const sliderOffset = sliderRect.left;
      this.newValue = Math.round((e.clientX - sliderOffset) / this.sliderWidth * 100);
      this.updateValue(this.newValue, true);
    },

    updateValue(value, isFinished) {
      if (this.disabled) return;

      value = this.format(value);
      this.$emit('input', value);

      if (isFinished) {
        this.$emit('change', value);
      }
    },

    format(value) {
      return Math.round(this.range(value));
    },

    range(value) {
      return Math.max(this.min, Math.min(value, this.max));
    }
  }
});
</script>
