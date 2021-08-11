<script setup lang="ts">
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

const t = useTranslate(i18n);
</script>

<template>
  <demo-block :title="t('disabled')">
    <van-cell-group inset>
      <van-field
        :model-value="t('inputReadonly')"
        :label="t('text')"
        readonly
      />
      <van-field
        :model-value="t('inputDisabled')"
        :label="t('text')"
        disabled
      />
    </van-cell-group>
  </demo-block>
</template>
