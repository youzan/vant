<template>
  <div :class="b()" :style="style">
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
      const { vertical, width, height } = this.$parent;
      return {
        width: width + 'px',
        height: vertical ? height + 'px' : '100%',
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
