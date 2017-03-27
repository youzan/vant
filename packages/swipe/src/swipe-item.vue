<template>
  <div class="zan-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zan-swipe-item',

  beforeCreate() {
    this.$parent.swipes.push(this);
  }
};
</script>
