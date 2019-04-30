<template>
  <demo-section>
    <demo-block :title="$t('loadingType')">
      <van-loading />
      <van-loading type="spinner" />
    </demo-block>

    <demo-block :title="$t('loadingColor')">
      <van-loading color="#1989fa" />
      <van-loading
        type="spinner"
        color="#1989fa"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      loadingType: '加载类型',
      loadingColor: '自定义颜色'
    },
    'en-US': {
      loadingType: 'Type',
      loadingColor: 'Color'
    }
  }
};
</script>

<style lang="less">
.demo-loading {
  .van-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;
  }
}
</style>
