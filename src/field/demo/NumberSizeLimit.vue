<template>
  <demo-block :title="t('numberSizeLimit')">
    <van-field
      v-model="digit"
      type="digit"
      :label="t('digit')"
      :max="50"
      :placeholder="t('digitPlaceholder')"
    />
    <van-field
      v-model="number"
      type="number"
      :label="t('number')"
      :min="2"
      :max="50"
      :placeholder="t('numberPlaceholder')"
    />
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      digit: '整数',
      number: '数字',
      numberSizeLimit: '数字大小限制',
      digitPlaceholder: '请输入小于50的整数',
      numberPlaceholder: '请输入2-50之间数字（支持小数）',
    },
    'en-US': {
      digit: 'Digit',
      number: 'Number',
      numberSizeLimit: 'Number Size Limit',
      digitPlaceholder: 'Digit Number Less 50',
      numberPlaceholder: 'Number Between 2-50',
    },
  },

  data() {
    return {
      digit: '',
      number: '',
    };
  },
};
</script>
