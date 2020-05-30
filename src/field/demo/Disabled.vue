<template>
  <demo-block :title="t('disabled')">
    <van-field :value="t('inputReadonly')" :label="t('text')" readonly />
    <van-field :value="t('inputDisabled')" :label="t('text')" disabled />
  </demo-block>
</template>

<script>
export default {
  i18n: {
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
  },
};
</script>
