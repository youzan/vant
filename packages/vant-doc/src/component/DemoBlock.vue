<template>
  <section class="van-doc-demo-block">
    <h2 class="van-doc-demo-block__title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'demo-block',

  props: {
    title: String
  }
};
</script>

<style lang="less">
@import '../style/variable';

.van-doc-demo-block {
  &__title {
    margin: 0;
    padding: 32px 16px 16px;
    color: @van-doc-text-light-blue;
    font-weight: normal;
    font-size: 14px;
  }

  &:first-of-type {
    .van-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
