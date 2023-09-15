<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-divider />
    </demo-block>

    <demo-block :title="t('withText')">
      <van-divider>
        {{ t('text') }}
      </van-divider>
    </demo-block>

    <demo-block :title="t('contentPosition')">
      <van-divider content-position="left">
        {{ t('text') }}
      </van-divider>

      <van-divider content-position="right">
        {{ t('text') }}
      </van-divider>
    </demo-block>

    <demo-block :title="t('dashed')">
      <van-divider dashed :hairline="false">
        {{ t('text') }}
      </van-divider>
    </demo-block>

    <demo-block :title="t('customStyle')">
      <van-divider
        :style="{ borderColor: '#1989fa', color: '#1989fa', padding: '0 16px' }"
      >
        {{ t('text') }}
      </van-divider>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      dashed: '虚线',
      withText: '展示文本',
      contentPosition: '内容位置',
      customStyle: '自定义样式',
    },
    'en-US': {
      text: 'Text',
      dashed: 'Dashed',
      withText: 'With Text',
      contentPosition: 'Content Position',
      customStyle: 'Custom Style',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-divider {
  background-color: @white;

  .van-doc-demo-block__title {
    padding-top: @padding-md;
  }
}
</style>
