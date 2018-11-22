<template>
  <div
    :class="b()"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'swipe-item',

  data() {
    return {
      offset: 0
    };
  },

  computed: {
    style() {
      const { vertical, computedWidth, computedHeight } = this.$parent;

      return {
        width: computedWidth + 'px',
        height: vertical ? computedHeight + 'px' : '100%',
        transform: `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`
      };
    }
  },

  beforeCreate() {
    this.$parent.swipes.push(this);
  },

  destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
});
</script>
