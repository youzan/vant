<template>
  <div class="van-slider" :class="{ disabled }">
    <div class="van-slider__bar" ref="bar" @click.stop="onSliderClicked" :style="barStyle">
      <span class="van-slider__finished-portion" :style="finishedStyle" />
      <span
        class="van-slider__pivot"
        :style="pivotStyle"
        ref="pivot"
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
    value: {
      type: Number,
      default: 0,
      validator(value) {
        return value <= 100 && value >= 0;
      }
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
      innerValue: 0,
      pivotOffset: 0
    };
  },

  watch: {
    value(val) {
      if (this.draging) return;
      this.innerValue = val;
    }
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
        width: this.innerValue + '%'
      };
    },
    pivotStyle() {
      return {
        backgroundColor: this.pivotColor,
        left: this.innerValue + '%',
        marginLeft: `-${this.pivotOffset}px`
      };
    }
  },

  created() {
    this.innerValue = this.setRange(this.value);
  },

  mounted() {
    this.pivotOffset = this.$refs.pivot.getBoundingClientRect().width / 2;
  },

  methods: {
    onTouchStart(event) {
      if (this.disabled) return;
      this.draging = true;
      this.touchStart(event);
      this.startValue = this.innerValue;
    },

    onTouchMove(event) {
      if (this.draging) {
        this.touchMove(event);
        const diff = this.deltaX / this.sliderWidth * 100;
        this.newValue = Math.round(this.startValue + diff);
        this.updateValue(this.newValue);
        this.$emit('change', this.newValue);
      }
    },

    onTouchEnd() {
      if (this.draging) {
        setTimeout(() => {
          this.draging = false;
          this.updateValue(this.newValue, true);
          this.$emit('after-change', this.newValue);
        }, 0);
      }
    },
    onSliderClicked(e) {
      if (this.disabled || this.draging) return;
      const sliderRect = this.$refs.bar.getBoundingClientRect();
      const sliderOffset = sliderRect.left;
      this.newValue = Math.round((e.clientX - sliderOffset) / this.sliderWidth * 100);
      this.updateValue(this.newValue, true);
      this.$emit('change', this.newValue);
    },
    updateValue(value, triggerEvent) {
      value = this.setRange(value);
      this.innerValue = value;
    },

    setRange(value) {
      return Math.max(0, Math.min(value, 100));
    }
  }
});
</script>
