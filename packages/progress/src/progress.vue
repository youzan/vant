<template>
  <div class="zan-progress">
    <div class="zan-progress__bar">
      <span class="zan-progress__bar__finished-portion" :style="{backgroundColor: componentColor, width: percentage + '%'}"></span>
      <span class="zan-progress__bar__pivot" :style="pivotStyle">
        {{pivotText}}
      </span>
    </div>
  </div>
</template>

<script>
/**
 * zan-progress
 * @module components/progress
 * @desc 开关
 * @param {boolean} [inactive=false] - 是否置灰
 * @param {number} [percentage=0] - 进度百分比
 * @param {string} [pivotText=percentage] - 进度条显示文字
 * @param {string} [color='#38f'] - 进度条颜色
 * @param {string} [textColor='#fff'] - 进度条文字颜色
 *
 * @example
 * <zan-switch checked="true" disabled="false"></zan-switch>
 */
export default {
  name: 'zan-progress',

  props: {
    percentage: {
      type: Number,
      default: 0,
      validate(value) {
        return value <= 100 && value >= 0;
      }
    },
    inactive: {
      type: Boolean,
      default: false
    },
    pivotText: {
      type: String,
      default: function() {
        return this.percentage.toString() + '%';
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
      const pivotStyle = {
        backgroundColor: this.componentColor,
        color: this.textColor,
        left: this.percentage + '%',
        marginLeft: '-14px'
      };
      console.log(this.percentage);
      if (this.percentage <= 5) {
        pivotStyle.left = '0%';
        pivotStyle.marginLeft = '0';
      } else if (this.percentage >= 95) {
        pivotStyle.left = '100%';
        pivotStyle.marginLeft = '-28px';
      } else {
        pivotStyle.left = this.percentage + '%';
        pivotStyle.marginLeft = '-14px';
      }

      return pivotStyle;
    }
  }
};
</script>
