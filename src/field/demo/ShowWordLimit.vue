<template>
  <demo-block v-if="!isWeapp" :title="t('showWordLimit')">
    <van-field
      v-model="value"
      autosize
      show-word-limit
      rows="2"
      type="textarea"
      maxlength="50"
      :label="t('message')"
      :placeholder="t('placeholder')"
    />
  </demo-block>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    message: '留言',
    placeholder: '请输入留言',
    showWordLimit: '显示字数统计',
  },
  'en-US': {
    message: 'Message',
    placeholder: 'Message',
    showWordLimit: 'Show Word Limit',
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
