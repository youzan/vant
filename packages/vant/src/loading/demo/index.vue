<script setup lang="ts">
import VanLoading from '..';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    type: '加载类型',
    text: '加载文案',
    size: '自定义大小',
    color: '自定义颜色',
    vertical: '垂直排列',
    textColor: '自定义文本颜色',
  },
  'en-US': {
    type: 'Type',
    text: 'Text',
    size: 'Size',
    color: 'Color',
    vertical: 'Vertical',
    textColor: 'Text Color',
  },
});
</script>

<template>
  <demo-block :title="t('type')">
    <van-loading />
    <van-loading type="spinner" />
  </demo-block>

  <demo-block :title="t('color')">
    <van-loading color="#1989fa" />
    <van-loading type="spinner" color="#1989fa" />
  </demo-block>

  <demo-block :title="t('size')">
    <van-loading size="24" />
    <van-loading type="spinner" size="24" />
  </demo-block>

  <demo-block :title="t('text')">
    <van-loading size="24px">
      {{ t('loading') }}
    </van-loading>
  </demo-block>

  <demo-block :title="t('vertical')">
    <van-loading size="24px" vertical>
      {{ t('loading') }}
    </van-loading>
  </demo-block>

  <demo-block :title="t('textColor')">
    <van-loading size="24px" vertical color="#0094ff">
      {{ t('loading') }}
    </van-loading>
    <van-loading size="24px" vertical text-color="#0094ff">
      {{ t('loading') }}
    </van-loading>
  </demo-block>
</template>

<style lang="less">
.demo-loading {
  background: var(--van-white);

  .van-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
