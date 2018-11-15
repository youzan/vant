<template>
  <div
    :class="b([type, colorType])"
    :style="style"
  >
    <span :class="b('spinner', type)">
      <i
        v-for="(item, index) in (type === 'spinner' ? 12 : 0)"
        :key="index"
      />
      <svg
        v-if="type === 'circular'"
        :class="b('circular')"
        viewBox="25 25 50 50"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
        />
      </svg>
    </span>
  </div>
</template>

<script>
import create from '../utils/create-basic';

const DEFAULT_COLOR = '#c9c9c9';

export default create({
  name: 'loading',

  props: {
    size: String,
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: DEFAULT_COLOR
    }
  },

  computed: {
    colorType() {
      const { color } = this;
      return color === 'white' || color === 'black' ? color : '';
    },

    style() {
      return {
        color: this.color === 'black' ? DEFAULT_COLOR : this.color,
        width: this.size,
        height: this.size
      };
    }
  }
});
</script>
