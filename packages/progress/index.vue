<template>
  <div :class="b()">
    <span :class="b('portion')" :style="portionStyle" />
    <span :class="b('pivot')" v-show="showPivot" :style="pivotStyle">{{ pivotText }}</span>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'progress',

  props: {
    inactive: Boolean,
    percentage: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    pivotText: {
      type: String,
      default() {
        return this.percentage + '%';
      }
    },
    color: {
      type: String,
      default: '#38f'
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    componentColor() {
      return this.inactive ? '#cacaca' : this.color;
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
});
</script>
