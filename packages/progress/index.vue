<template>
  <div class="van-progress">
    <span class="van-progress__portion" :style="portionStyle"></span>
    <span class="van-progress__pivot" :style="pivotStyle">{{ pivotText }}</span>
  </div>
</template>

<script>
const DEFAULT_COLOR = '#38f';
const DEFAULT_TEXT_COLOR = '#fff';
const INACTIVE_COLOR = '#cacaca';

export default {
  name: 'van-progress',

  props: {
    percentage: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100
    },
    inactive: Boolean,
    pivotText: {
      type: String,
      default() {
        return this.percentage + '%';
      }
    },
    color: {
      type: String,
      default: DEFAULT_COLOR
    },
    textColor: {
      type: String,
      default: DEFAULT_TEXT_COLOR
    }
  },

  computed: {
    componentColor() {
      return this.inactive ? INACTIVE_COLOR : this.color;
    },
    pivotStyle() {
      const { percentage } = this;
      return {
        color: this.textColor,
        backgroundColor: this.componentColor,
        left: percentage <= 5 ? '0%' : percentage >= 95 ? '100%' : percentage + '%',
        marginLeft: percentage <= 5 ? '0' : percentage >= 95 ? '-28px' : '-14px'
      };
    },
    portionStyle() {
      return {
        width: this.percentage + '%',
        backgroundColor: this.componentColor
      };
    }
  }
};
</script>
