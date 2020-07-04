<template>
  <div class="van-doc-demo-block">
    <h2 v-if="title" class="van-doc-demo-block__title">{{ title }}</h2>
    <div v-if="card" class="van-doc-demo-block__card">
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: 'demo-block',

  props: {
    card: Boolean,
    title: String,
  },
};
</script>

<style lang="less">
@import '../../common/style/var';

.van-doc-demo-block {
  &__title {
    margin: 0;
    padding: 32px 16px 16px;
    color: @van-doc-text-light-blue;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }

  &__card {
    margin: 12px 12px 0;
    overflow: hidden;
    border-radius: 8px;
  }

  &__title + &__card {
    margin-top: 0;
  }

  &:first-of-type {
    .van-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
