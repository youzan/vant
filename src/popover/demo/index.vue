<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-popover
        v-model="show.basic"
        :actions="t('actions')"
        placement="bottom"
      >
        <van-button type="primary" @click="show.basic = true">
          {{ t('showPopover') }}
        </van-button>
      </van-popover>
    </demo-block>

    <demo-block :title="t('lightTheme')">
      <van-popover
        v-model="show.lightTheme"
        theme="light"
        :actions="t('actions')"
        placement="right-end"
      >
        <van-button type="primary" @click="show.lightTheme = true">
          {{ t('lightTheme') }}
        </van-button>
      </van-popover>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      actions: [{ text: '文本' }, { text: '文本' }, { text: '文本' }],
      lightTheme: '浅色风格',
      showPopover: '点击弹出气泡',
    },
    'en-US': {
      actions: [{ text: 'Text' }, { text: 'Text' }, { text: 'Text' }],
      lightTheme: 'Light Theme',
      showPopover: 'Show Popover',
    },
  },

  data() {
    return {
      show: {
        basic: false,
        lightTheme: false,
      },
    };
  },

  methods: {},
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popover {
  .van-popover__wrapper {
    margin-left: @padding-md;
  }
}
</style>
