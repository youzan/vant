<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-tag>{{ $t('tag') }}</van-tag>
      <van-tag type="danger">{{ $t('tag') }}</van-tag>
      <van-tag type="success">{{ $t('tag') }}</van-tag>
      <van-tag type="primary">{{ $t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-tag plain>{{ $t('tag') }}</van-tag>
      <van-tag plain type="danger">{{ $t('tag') }}</van-tag>
      <van-tag plain type="primary">{{ $t('tag') }}</van-tag>
      <van-tag plain type="success">{{ $t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-tag mark>{{ $t('tag') }}</van-tag>
      <van-tag mark type="danger">{{ $t('tag') }}</van-tag>
      <van-tag mark type="primary">{{ $t('tag') }}</van-tag>
      <van-tag mark type="success">{{ $t('tag') }}</van-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '空心样式',
      title3: '圆角样式'
    },
    'en-US': {
      title2: 'Plain style',
      title3: 'Mark style'
    }
  }
};
</script>

<style lang="postcss">
.demo-tag {
  .van-tag + .van-tag {
    margin-left: 10px;
  }

  .van-tag {
    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>
