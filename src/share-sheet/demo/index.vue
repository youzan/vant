<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-cell
        is-link
        :title="t('showSheet')"
        @click="showBasicSheet = true"
      />
      <van-share-sheet v-model="showBasicSheet" :options="options" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      link: '复制链接',
      wechat: '微信',
      poster: '分享海报',
      qrcode: '二维码',
      showSheet: '显示分享面板',
    },
    'en-US': {
      link: 'Link',
      wechat: 'Wechat',
      poster: 'Poster',
      qrcode: 'Qrcode',
      showSheet: 'Show ShareSheet',
    },
  },

  data() {
    return {
      showBasicSheet: false,
    };
  },

  created() {
    this.options = [
      { name: this.t('wechat'), icon: 'wechat' },
      { name: this.t('link'), icon: 'link' },
      { name: this.t('poster'), icon: 'poster' },
      { name: this.t('qrcode'), icon: 'qrcode' },
    ];
  },
};
</script>

<style lang="less">
@import '../../style/var';
</style>
