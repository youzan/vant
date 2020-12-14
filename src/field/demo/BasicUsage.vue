<template>
  <demo-block :title="t('basicUsage')">
    <van-cell-group>
      <van-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('placeholder')"
      />
    </van-cell-group>
  </demo-block>
</template>

<script lang="ts">
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

export default {
  setup() {
    const t = useTranslate(i18n);
    const value = ref('');
    return { t, value };
  },
};
</script>
