<template>
  <demo-block :title="t('inputAlign')">
    <van-field
      v-model="value"
      :label="t('text')"
      :placeholder="t('alignPlaceHolder')"
      input-align="right"
    />
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      inputAlign: '输入框内容对齐',
      alignPlaceHolder: '输入框内容右对齐',
    },
    'en-US': {
      text: 'Text',
      inputAlign: 'Input Align',
      alignPlaceHolder: 'Input Align Right',
    },
  },

  data() {
    return {
      value: '',
    };
  },
};
</script>
