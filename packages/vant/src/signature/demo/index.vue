<script setup>
import { ref } from 'vue';
import VanSignature from '..';
import VanImage from '../../image';
import { useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

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
  demoUrl.value = data.image;
};

const onClear = () => showToast('clear');
</script>

<template>
  <demo-block :title="t('basic')">
    <van-signature @submit="onSubmit" @clear="onClear" />
  </demo-block>

  <van-image v-if="demoUrl" :src="demoUrl" />

  <demo-block :title="t('penColor')">
    <van-signature pen-color="#ff0000" @clear="onClear" @submit="onSubmit" />
  </demo-block>

  <demo-block :title="t('lineWidth')">
    <van-signature :line-width="6" @clear="onClear" @submit="onSubmit" />
  </demo-block>
</template>
