<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-loading color="black" />
      <van-loading color="white" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-loading type="spinner" color="black" />
      <van-loading type="spinner" color="white" />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-loading type="circle" color="black" />
      <van-loading type="circle" color="white" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: 'Circular',
      title2: 'Spinner',
      title3: 'Circle'
    },
    'en-US': {
      title1: 'Circular',
      title2: 'Spinner',
      title3: 'Circle'
    }
  }
};
</script>

<style lang="postcss">
.demo-loading {
  .van-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;
  }

  .van-loading--white {
    padding: 10px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, .5);
  }
}
</style>
