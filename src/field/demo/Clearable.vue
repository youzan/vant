<template>
  <demo-block :title="t('clearable')">
    <van-field v-model="value" :label="t('text')" clearable />
  </demo-block>
</template>

<script>
export default {
  data() {
    return {
      value: '可清除输入框',
    };
  },
  i18n: {
    'zh-CN': {
      text: '文本',
      clearable: '可清除输入框',
      inputClearable: '输入框可清除',
    },
    'en-US': {
      text: 'Text',
      clearable: 'Input Clearable',
      inputClearable: 'Input Clearable',
    },
  },
};
</script>
