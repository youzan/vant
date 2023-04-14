<script setup>
import { ref } from 'vue';
import VanSignature from '..';
import VanImage from '../../image';

import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    penColor: '自定义颜色',
    lineWidth: '自定义线宽',
  },
  'en-US': {
    basic: 'basic',
    penColor: 'penColor',
    lineWidth: 'lineWidth',
  },
});

const demoUrl = ref('');

const onSubmit = (data) => {
  const { filePath, canvas } = data;
  demoUrl.value = filePath;

  console.log('submit', canvas, filePath);
};

const onStart = () => console.log('start');
const onClear = () => console.log('clear');
const onEnd = () => console.log('end');
const onSigning = (e) => console.log('signing', e);
</script>

<template>
  <demo-block :title="t('basic')">
    <van-signature
      @submit="onSubmit"
      @clear="onClear"
      @start="onStart"
      @end="onEnd"
      @signing="onSigning"
    />
  </demo-block>
  <van-image v-if="demoUrl" :src="demoUrl" />
  <demo-block :title="t('penColor')">
    <van-signature
      pen-color="#ff0000"
      @clear="onClear"
      @submit="onSubmit"
      @start="onStart"
      @end="onEnd"
      @signing="onSigning"
    />
  </demo-block>
  <demo-block :title="t('lineWidth')">
    <van-signature
      :line-width="6"
      @clear="onClear"
      @submit="onSubmit"
      @start="onStart"
      @end="onEnd"
      @signing="onSigning"
    />
  </demo-block>
</template>
