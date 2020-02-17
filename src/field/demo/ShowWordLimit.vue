<template>
  <demo-block v-if="!isWeapp" :title="$t('showWordLimit')">
    <van-cell-group>
      <van-field
        v-model="value"
        autosize
        show-word-limit
        rows="2"
        type="textarea"
        maxlength="50"
        :label="$t('message')"
        :placeholder="$t('placeholder')"
      />
    </van-cell-group>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      message: '留言',
      placeholder: '请输入留言',
      showWordLimit: '显示字数统计',
    },
    'en-US': {
      message: 'Message',
      placeholder: 'Message',
      showWordLimit: 'Show Word Limit',
    },
  },

  data() {
    return {
      value: '',
    };
  },
};
</script>
