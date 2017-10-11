<template>
  <div class="van-swipe-item" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'van-swipe-item',

  beforeCreate() {
    this.$parent.swipes.push(this);
    this.$parent.childrenOffset.push(0);
  },

  data() {
    return {
      offset: 0,
      index: this.$parent.swipes.indexOf(this)
    };
  },

  computed: {
    style() {
      return {
        width: this.$parent.width + 'px',
        transform: `translate3d(${this.offset}px, 0, 0)`
      };
    }
  },

  destroyed() {
    this.$parent.swipes.splice(this.index, 1);
  },

  watch: {
    'offset'(val) {
      console.log(this.offset);
    }
  }
};
</script>
