<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-cell
        is-link
        :title="t('showSheet')"
        @click="showBasicSheet = true"
      />
      <van-share-sheet
        v-model="showBasicSheet"
        :options="options"
        @select="onSelect"
      />
    </demo-block>

    <demo-block :title="t('withTitle')">
      <van-cell
        is-link
        :title="t('showSheet')"
        @click="showTitleSheet = true"
      />
      <van-share-sheet
        v-model="showTitleSheet"
        :title="t('title')"
        :options="options"
        :description="t('description')"
        @select="onSelect"
      />
    </demo-block>

    <demo-block :title="t('multiLine')">
      <van-cell
        is-link
        :title="t('showSheet')"
        @click="showMultiRowSheet = true"
      />
      <van-share-sheet
        v-model="showMultiRowSheet"
        :options="multiLineOptions"
        @select="onSelect"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      qq: 'QQ',
      link: '复制链接',
      title: '立即分享给好友',
      weibo: '微博',
      wechat: '微信',
      poster: '分享海报',
      qrcode: '二维码',
      multiLine: '展示多行选项',
      showSheet: '显示分享面板',
      withTitle: '展示面板标题',
      description: '描述信息',
    },
    'en-US': {
      qq: 'QQ',
      link: 'Link',
      title: 'Share with friends',
      weibo: 'Weibo',
      wechat: 'Wechat',
      poster: 'Poster',
      qrcode: 'Qrcode',
      multiLine: 'Multi Line',
      showSheet: 'Show ShareSheet',
      withTitle: 'Show Title',
      description: 'Description',
    },
  },

  data() {
    return {
      showBasicSheet: false,
      showTitleSheet: false,
      showMultiRowSheet: false,
    };
  },

  created() {
    this.options = [
      { name: this.t('wechat'), icon: 'wechat' },
      { name: this.t('weibo'), icon: 'weibo' },
      { name: this.t('link'), icon: 'link' },
      { name: this.t('poster'), icon: 'poster' },
      { name: this.t('qrcode'), icon: 'qrcode' },
    ];

    this.multiLineOptions = [
      [
        { name: this.t('wechat'), icon: 'wechat' },
        { name: this.t('weibo'), icon: 'weibo' },
        { name: this.t('qq'), icon: 'qq' },
      ],
      [
        { name: this.t('link'), icon: 'link' },
        { name: this.t('poster'), icon: 'poster' },
        { name: this.t('qrcode'), icon: 'qrcode' },
      ],
    ];
  },

  methods: {
    onSelect(option) {
      this.$toast(option.name);
      this.showBasicSheet = false;
      this.showTitleSheet = false;
      this.showMultiRowSheet = false;
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';
</style>
