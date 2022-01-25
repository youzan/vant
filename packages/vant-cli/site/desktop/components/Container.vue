<template>
  <div
    class="van-doc-container van-doc-row"
    :class="{ 'van-doc-container--with-simulator': hasSimulator }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VanDocContainer',

  props: {
    hasSimulator: Boolean,
  },
};
</script>

<style lang="less">
.van-doc-container {
  box-sizing: border-box;
  padding-left: var(--van-doc-nav-width);
  overflow: hidden;

  &--with-simulator {
    padding-right: calc(
      var(--van-doc-simulator-width) + var(--van-doc-padding)
    );

    @media (max-width: 1100px) {
      padding-right: calc(var(--van-doc-simulator-width) - 8px);
    }
  }
}
</style>
