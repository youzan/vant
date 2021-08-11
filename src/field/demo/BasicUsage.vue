<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    label: '文本',
    placeholder: '请输入文本',
  },
  'en-US': {
    label: 'Label',
    placeholder: 'Text',
  },
};

const t = useTranslate(i18n);
const value = ref('');
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-cell-group inset>
      <van-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('placeholder')"
      />
    </van-cell-group>
  </demo-block>
</template>
