<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-progress :percentage="0" />
      <van-progress :percentage="46" />
      <van-progress :percentage="100" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-progress inactive :percentage="0" />
      <van-progress inactive :percentage="46" />
      <van-progress inactive :percentage="100" />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-progress :pivotText="$t('red')" color="#ed5050" :percentage="26" />
      <van-progress :pivotText="$t('orange')" color="#f60" :percentage="46" />
      <van-progress :pivotText="$t('yellow')" color="#f09000" :percentage="66" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '进度条置灰',
      title3: '样式定制'
    },
    'en-US': {
      title2: 'Inactive',
      title3: 'Custom Style'
    }
  }
}
</script>

<style lang="postcss">
.demo-progress {
  .van-progress {
    margin: 20px 10px;

    &:first-of-type {
      margin-top: 10px;
    }
  }
} 
</style>