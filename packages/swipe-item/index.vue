<template>
  <div class="van-swipe-item" :style="style">
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
      return {
        width: this.$parent.width + 'px',
        transform: `translate(${this.offset}px, 0)`
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
