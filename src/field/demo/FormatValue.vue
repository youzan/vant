<template>
  <demo-block v-if="!isWeapp" :title="t('formatValue')">
    <van-field
      v-model="value1"
      :label="t('text')"
      :formatter="formatter"
      :placeholder="t('formatOnChange')"
    />
    <van-field
      v-model="value2"
      :label="t('text')"
      :formatter="formatter"
      format-trigger="onBlur"
      :placeholder="t('formatOnBlur')"
    />
  </demo-block>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      formatValue: '格式化输入内容',
      formatOnBlur: '在失焦时执行格式化',
      formatOnChange: '在输入时执行格式化',
    },
    'en-US': {
      text: 'Text',
      formatValue: 'Format Value',
      formatOnBlur: 'Format On Blur',
      formatOnChange: 'Format On Change',
    },
  },

  setup() {
    const state = reactive({
      value1: '',
      value2: '',
    });
    const formatter = (value) => value.replace(/\d/g, '');

    return {
      ...toRefs(state),
      formatter,
    };
  },
};
</script>
