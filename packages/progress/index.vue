<template>
  <div :class="b()">
    <span
      :class="b('portion', { 'with-pivot': showPivot && text })"
      :style="portionStyle"
    >
      <span
        v-if="showPivot && text"
        ref="pivot"
        :style="pivotStyle"
        :class="b('pivot')"
      >
        {{ text }}
      </span>
    </span>
  </div>
</template>

<script>
import create from '../utils/create';
import { BLUE, WHITE } from '../utils/color';

export default create({
  name: 'progress',

  props: {
    inactive: Boolean,
    pivotText: String,
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
    color: {
      type: String,
      default: BLUE
    },
    textColor: {
      type: String,
      default: WHITE
    }
  },

  data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },

  computed: {
    text() {
      return this.isDef(this.pivotText)
        ? this.pivotText
        : this.percentage + '%';
    },

    currentColor() {
      return this.inactive ? '#cacaca' : this.color;
    },

    pivotStyle() {
      return {
        color: this.textColor,
        background: this.pivotColor || this.currentColor
      };
    },

    portionStyle() {
      return {
        width: (this.progressWidth - this.pivotWidth) * this.percentage / 100 + 'px',
        background: this.currentColor
      };
    }
  },

  mounted() {
    this.getWidth();
  },

  watch: {
    showPivot() {
      this.getWidth();
    },

    pivotText() {
      this.getWidth();
    }
  },

  methods: {
    getWidth() {
      this.progressWidth = this.$el.offsetWidth;
      this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0;
    }
  }
});
</script>
