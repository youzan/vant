<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-cell is-link :title="t('showSheet')" @click="show.basic = true" />
      <van-share-sheet
        v-model="show.basic"
        :options="options"
        @select="onSelect"
      />
    </demo-block>

    <demo-block :title="t('withTitle')">
      <van-cell
        is-link
        :title="t('showSheet')"
        @click="show.withTitle = true"
      />
      <van-share-sheet
        v-model="show.withTitle"
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
        @click="show.multiLine = true"
      />
      <van-share-sheet
        v-model="show.multiLine"
        :options="multiLineOptions"
        @select="onSelect"
      />
    </demo-block>

    <demo-block :title="t('customIcon')">
      <van-cell
        is-link
        :title="t('showSheet')"
        @click="show.customIcon = true"
      />
      <van-share-sheet
        v-model="show.customIcon"
        :options="customIconOptions"
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
      name: '名称',
      link: '复制链接',
      title: '立即分享给好友',
      weibo: '微博',
      wechat: '微信',
      poster: '分享海报',
      qrcode: '二维码',
      multiLine: '展示多行选项',
      showSheet: '显示分享面板',
      withTitle: '展示面板标题',
      customIcon: '自定义图标',
      description: '描述信息',
    },
    'en-US': {
      qq: 'QQ',
      name: 'Name',
      link: 'Link',
      title: 'Share with friends',
      weibo: 'Weibo',
      wechat: 'Wechat',
      poster: 'Poster',
      qrcode: 'Qrcode',
      multiLine: 'Multi Line',
      showSheet: 'Show ShareSheet',
      withTitle: 'Show Title',
      customIcon: 'Custom Icon',
      description: 'Description',
    },
  },

  data() {
    return {
      show: {
        basic: false,
        withTitle: false,
        multiLine: false,
        customIcon: false,
      },
    };
  },

  computed: {
    options() {
      return [
        { name: this.t('wechat'), icon: 'wechat' },
        { name: this.t('weibo'), icon: 'weibo' },
        { name: this.t('link'), icon: 'link' },
        { name: this.t('poster'), icon: 'poster' },
        { name: this.t('qrcode'), icon: 'qrcode' },
      ];
    },

    multiLineOptions() {
      return [
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

    customIconOptions() {
      return [
        {
          name: this.t('name'),
          icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
        },
        {
          name: this.t('name'),
          icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
        },
        {
          name: this.t('name'),
          icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
        },
      ];
    },
  },

  methods: {
    onSelect(option) {
      this.$toast(option.name);
      this.show.basic = false;
      this.show.withTitle = false;
      this.show.multiLine = false;
      this.show.customIcon = false;
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';
</style>
