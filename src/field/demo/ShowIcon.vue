<template>
  <demo-block :title="t('showIcon')">
    <van-field
      v-model="icon1"
      :label="t('text')"
      left-icon="smile-o"
      right-icon="warning-o"
      :placeholder="t('showIcon')"
    />
    <van-field
      v-model="icon2"
      clearable
      :label="t('text')"
      left-icon="music-o"
      :placeholder="t('showClearIcon')"
    />
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      showIcon: '显示图标',
      showClearIcon: '显示清除图标',
    },
    'en-US': {
      text: 'Text',
      showIcon: 'Show Icon',
      showClearIcon: 'Show Clear Icon',
    },
  },

  data() {
    return {
      icon1: '',
      icon2: '123',
    };
  },
};
</script>
