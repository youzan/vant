<template>
  <div
    class="van-slider"
    :class="{ 'van-slider--disabled': disabled }"
  >
    <div
      class="van-slider__bar"
      ref="bar"
      :style="barStyle"
      @click.stop="onSliderClicked"
    >
      <span
        class="van-slider__finished-portion"
        :style="finishedStyle"
      />
      <span
        class="van-slider__pivot"
        ref="pivot"
        :style="pivotStyle"
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

const DEFAULT_COLOR = '#4b0';
const DEFAULT_BG = '#cacaca';

export default create({
  name: 'slider',
  mixins: [Touch],

  props: {
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
      default: 0,
      required: true
    },

    disabled: Boolean,

    pivotColor: {
      type: String,
      default: DEFAULT_COLOR
    },

    barColor: {
      type: String,
      default: DEFAULT_BG
    },

    loadedBarColor: {
      type: String,
      default: DEFAULT_COLOR
    }
  },

  data() {
    return {
      pivotOffset: 0
    };
  },

  computed: {
    sliderWidth() {
      const rect = this.$refs.bar.getBoundingClientRect();
      return rect['width'];
    },

    barStyle() {
      return {
        backgroundColor: this.barColor
      };
    },

    finishedStyle() {
      return {
        backgroundColor: this.loadedBarColor,
        width: this.format(this.value) + '%'
      };
    },

    pivotStyle() {
      return {
        backgroundColor: this.pivotColor,
        left: this.format(this.value) + '%',
        marginLeft: `-${this.pivotOffset}px`
      };
    }
  },

  mounted() {
    this.pivotOffset = parseInt(this.$refs.pivot.getBoundingClientRect().width / 2);
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

    onSliderClicked(e) {
      if (this.disabled || this.draging) return;

      const sliderRect = this.$refs.bar.getBoundingClientRect();
      const sliderOffset = sliderRect.left;
      this.newValue = Math.round((e.clientX - sliderOffset) / this.sliderWidth * 100);
      this.updateValue(this.newValue, true);
    },

    updateValue(value, isFinished) {
      if (this.disabled) return;

      value = this.format(value);
      this.$emit('change', value);
      this.$emit('input', value);

      if (isFinished) {
        this.$emit('after-change', value);
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
