<template>
  <div :class="b()">
    <span :class="b('portion')" :style="portionStyle">
      <span :class="b('pivot')" v-show="showPivot" :style="pivotStyle">{{ pivotText }}</span>
    </span>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'progress',

  props: {
    inactive: Boolean,
    pivotColor: String,
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
      return {
        color: this.textColor,
        background: this.pivotColor || this.componentColor
      };
    },

    portionStyle() {
      return {
        width: this.percentage + '%',
        background: this.componentColor
      };
    }
  }
});
</script>
