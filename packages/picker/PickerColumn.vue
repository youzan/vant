
<template>
  <div class="van-picker-column" :class="className" :style="columnStyle">
    <div class="van-picker-column__frame van-hairline--top-bottom" :style="frameStyle" />
    <ul
      :style="wrapperStyle"
      @touchstart="onTouchStart"
      @touchmove.prevent="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <li
        v-for="(option, index) in options" 
        v-text="getOptionText(option)"
        :class="{
          'van-picker-column--disabled': isDisabled(option),
          'van-picker-column--selected': index === currentIndex
        }"
        @click="setIndex(index)"
      />
    </ul>
  </div>
</template>

<script>
import { create } from '../utils';

const DEFAULT_DURATION = 200;
const range = (num, arr) => Math.min(Math.max(num, arr[0]), arr[1]);

export default create({
  name: 'van-picker-column',

  props: {
    valueKey: String,
    className: String,
    options: {
      type: Array,
      default: () => []
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    visibileColumnCount: {
      type: Number,
      default: 5
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      currentIndex: this.defaultIndex
    };
  },

  created() {
    this.$parent && this.$parent.children.push(this);
  },

  mounted() {
    this.setIndex(this.currentIndex);
  },

  destroyed() {
    this.$parent && this.$parent.children.splice(this.$parent.children.indexOf(this), 1);
  },

  watch: {
    defaultIndex() {
      this.setIndex(this.defaultIndex);
    },

    options(next, prev) {
      if (JSON.stringify(next) !== JSON.stringify(prev)) {
        this.setIndex(this.defaultIndex);
      }
    },

    currentIndex(index) {
      this.$emit('change', index);
    }
  },

  computed: {
    count() {
      return this.options.length;
    },

    columnStyle() {
      return {
        height: (this.itemHeight * this.visibileColumnCount) + 'px'
      };
    },

    wrapperStyle() {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0, ${this.offset}px, 0)`,
        lineHeight: this.itemHeight + 'px',
        padding: `${this.itemHeight * (this.visibileColumnCount - 1) / 2}px 0`
      };
    },

    frameStyle() {
      return {
        height: this.itemHeight + 'px'
      };
    },

    currentValue() {
      return this.options[this.currentIndex];
    }
  },

  methods: {
    onTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },

    onTouchMove(event) {
      const deltaY = event.touches[0].clientY - this.startY;
      this.offset = range(this.startOffset + deltaY, [
        -(this.count * this.itemHeight),
        this.itemHeight
      ]);
    },

    onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        const index = range(Math.round(-this.offset / this.itemHeight), [
          0,
          this.count - 1
        ]);
        this.setIndex(index);
      }
    },

    adjustIndex(index) {
      index = range(index, [0, this.count]);
      for (let i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(this.options[i])) return i;
      }
    },

    isDisabled(option) {
      return typeof option === 'object' && option.disabled;
    },

    getOptionText(option) {
      return typeof option === 'object' && this.valueKey in option ? option[this.valueKey] : option;
    },

    setIndex(index) {
      index = this.adjustIndex(index);
      this.offset = -index * this.itemHeight;
      this.currentIndex = index;
    },

    setValue(value) {
      const { options } = this;
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          this.setIndex(i);
          return;
        }
      }
    }
  }
});
</script>
