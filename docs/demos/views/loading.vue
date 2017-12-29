<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-loading type="circle" color="black" />
      <van-loading type="circle" color="white" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-loading type="gradient-circle" color="black" />
      <van-loading type="gradient-circle" color="white" />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-loading type="spinner" color="black" />
      <van-loading type="spinner" color="white" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '单色圆环',
      title2: '渐变色圆环',
      title3: 'Spinner'
    },
    'en-US': {
      title1: 'Solid Circle',
      title2: 'Gradient Circle',
      title3: 'Spinner'
    }
  }
};
</script>

<style lang="postcss">
.demo-loading {
  .van-loading {
    display: inline-block;
    margin: 10px 0 10px 20px;
  }
}
</style>
