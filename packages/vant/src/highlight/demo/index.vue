<script setup lang="ts">
import VanHighlight from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    text1: '慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。',
    keywords1: '难题',
    keywords2: ['难题', '终有一天', '答案'],
    keywords3: '生活',
    multipleKeywords: '多字符匹配',
    highlightClass: '设置高亮标签类名',
  },
  'en-US': {
    text1:
      'Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.',
    keywords1: 'questions',
    keywords2: ['time', 'life', 'answer'],
    keywords3: 'life',
    multipleKeywords: 'Multiple Keywords',
    highlightClass: 'Highlight Class Name',
  },
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-highlight :keywords="t('keywords1')" :source-string="t('text1')" />
  </demo-block>

  <demo-block :title="t('multipleKeywords')">
    <van-highlight :keywords="t('keywords2')" :source-string="t('text1')" />
  </demo-block>

  <demo-block :title="t('highlightClass')">
    <van-highlight
      :keywords="t('keywords3')"
      :source-string="t('text1')"
      highlight-class="custom-class"
    />
  </demo-block>
</template>

<style lang="less">
.demo-highlight {
  background: var(--van-background-2);

  .van-highlight {
    padding: 0 16px;
  }

  .custom-class {
    color: red;
  }
}
</style>
