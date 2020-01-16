<template>
  <button class="demo-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'demo-button',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary'
    }
  }
};
</script>

<style lang="less">
.demo-button {
  min-width: 120px;
  font-weight: 500;
}
</style>
