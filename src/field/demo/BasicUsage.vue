<template>
  <demo-block :title="t('basicUsage')">
    <van-cell-group>
      <van-field v-model="value" :placeholder="t('placeholder')" />
    </van-cell-group>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      placeholder: '请输入文本',
    },
    'en-US': {
      placeholder: 'Text',
    },
  },

  data() {
    return {
      value: '',
    };
  },
};
</script>
