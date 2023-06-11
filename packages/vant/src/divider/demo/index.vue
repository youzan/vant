<script setup lang="ts">
import VanDivider from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    text: '文本',
    dashed: '虚线',
    withText: '展示文本',
    contentPosition: '内容位置',
    customStyle: '自定义样式',
    vertical: '垂直',
  },
  'en-US': {
    text: 'Text',
    dashed: 'Dashed',
    withText: 'With Text',
    contentPosition: 'Content Position',
    customStyle: 'Custom Style',
    vertical: 'Vertical',
  },
});
</script>

<template>
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

  <demo-block :title="t('vertical')">
    <div class="content">
      <van-divider vertical />
      {{ t('text') }}
      <van-divider vertical dashed />
      {{ t('text') }}
      <van-divider vertical :hairline="false" />
      {{ t('text') }}
      <van-divider vertical :style="{ borderColor: '#1989fa' }" />
    </div>
  </demo-block>
</template>

<style lang="less">
.demo-divider {
  background-color: var(--van-background-2);

  .van-doc-demo-block__title {
    padding-top: var(--van-padding-md);
  }

  .content {
    padding: 0 var(--van-padding-md);
    color: var(--van-text-color-2);
    font-size: var(--van-font-size-md);
  }
}
</style>
