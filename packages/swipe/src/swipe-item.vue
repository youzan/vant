<template>
  <div class="van-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'van-swipe-item',

  beforeCreate() {
    this.$parent.swipes.push(this);
  }
};
</script>
