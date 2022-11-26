<template>
  <demo-block :title="t('clearable')">
    <van-field v-model="value" :label="t('text')" clearable />
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      clearable: '可清除输入框',
    },
    'en-US': {
      text: 'Text',
      clearable: 'Input Clearable',
    },
  },
  data() {
    return {
      value: '可清除输入框',
    };
  },
};
</script>
