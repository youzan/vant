<script setup lang="ts">
import VanField from '..';
import VanCellGroup from '../../cell-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    text: '文本',
    formatValue: '格式化输入内容',
    formatOnBlur: '在失焦时执行格式化',
    formatOnChange: '在输入时执行格式化',
  },
  'en-US': {
    text: 'Text',
    formatValue: 'Format Value',
    formatOnBlur: 'Format On Blur',
    formatOnChange: 'Format On Change',
  },
});

const value1 = ref('');
const value2 = ref('');
const formatter = (value: string) => value.replace(/\d/g, '');
</script>

<template>
  <demo-block :title="t('formatValue')">
    <van-cell-group inset>
      <van-field
        v-model="value1"
        :label="t('text')"
        :formatter="formatter"
        :placeholder="t('formatOnChange')"
      />
      <van-field
        v-model="value2"
        :label="t('text')"
        :formatter="formatter"
        format-trigger="onBlur"
        :placeholder="t('formatOnBlur')"
      />
    </van-cell-group>
  </demo-block>
</template>
