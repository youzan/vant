<template>
  <demo-block v-if="!isWeapp" :title="t('formatValue')">
    <van-field
      v-model="formatValue"
      :label="t('text')"
      :formatter="formatter"
      :placeholder="t('formatValue')"
    />
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      formatValue: '格式化输入内容',
    },
    'en-US': {
      text: 'Text',
      formatValue: 'Format Value',
    },
  },

  data() {
    return {
      formatValue: '',
    };
  },

  methods: {
    formatter(value) {
      return value.replace(/\d/g, '');
    },
  },
};
</script>
