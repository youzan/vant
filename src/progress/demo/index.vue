<template>
  <demo-block :title="t('basicUsage')">
    <van-progress :percentage="50" />
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('strokeWidth')">
    <van-progress :percentage="50" stroke-width="8" />
  </demo-block>

  <demo-block :title="t('title2')">
    <van-progress inactive :percentage="50" />
  </demo-block>

  <demo-block :title="t('title3')">
    <van-progress color="#f2826a" :percentage="25" :pivot-text="t('orange')" />
    <van-progress color="#ee0a24" :percentage="50" :pivot-text="t('red')" />
    <van-progress
      :percentage="75"
      :pivot-text="t('purple')"
      pivot-color="#7232dd"
      color="linear-gradient(to right, #be99ff, #7232dd)"
    />
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '置灰',
      title3: '样式定制',
      strokeWidth: '线条粗细',
    },
    'en-US': {
      title2: 'Inactive',
      title3: 'Custom Style',
      strokeWidth: 'Stroke Width',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-progress {
  background: @white;

  .van-progress {
    margin: 20px;

    &:first-of-type {
      margin-top: 5px;
    }
  }
}
</style>
