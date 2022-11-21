<script setup lang="ts">
import VanField from '..';
import VanCellGroup from '../../cell-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    label: '文本',
    placeholder: '请输入文本',
    mask: '使用mask格式化输入内容',
  },
  'en-US': {
    label: 'Label',
    placeholder: 'Text',
    mask: 'free mask input',
  },
});

const value = ref('');
</script>

<template>
  <demo-block :title="t('mask')">
    <van-cell-group inset>
      <van-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('placeholder')"
        :mask="['(##) ####-####', '(##) #####-####']"
        sync-mask-value
      />
    </van-cell-group>
  </demo-block>
</template>
