<template>
  <demo-block :title="t('disabled')">
    <van-field :model-value="t('inputReadonly')" :label="t('text')" readonly />
    <van-field :model-value="t('inputDisabled')" :label="t('text')" disabled />
  </demo-block>
</template>

<script lang="ts">
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    text: '文本',
    disabled: '禁用输入框',
    inputReadonly: '输入框只读',
    inputDisabled: '输入框已禁用',
  },
  'en-US': {
    text: 'Text',
    inputReadonly: 'Input Readonly',
    inputDisabled: 'Input Disabled',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);

    return { t };
  },
};
</script>
