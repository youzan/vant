<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link :title="t('showSheet')" @click="show.basic = true" />
    <van-share-sheet
      v-model:show="show.basic"
      :title="t('title')"
      :options="options"
      @select="onSelect"
    />
  </demo-block>

  <demo-block card :title="t('multiLine')">
    <van-cell is-link :title="t('showSheet')" @click="show.multiLine = true" />
    <van-share-sheet
      v-model:show="show.multiLine"
      :title="t('title')"
      :options="multiLineOptions"
      @select="onSelect"
    />
  </demo-block>

  <demo-block card :title="t('customIcon')">
    <van-cell is-link :title="t('showSheet')" @click="show.customIcon = true" />
    <van-share-sheet
      v-model:show="show.customIcon"
      :options="customIconOptions"
      @select="onSelect"
    />
  </demo-block>

  <demo-block card :title="t('withDesc')">
    <van-cell is-link :title="t('showSheet')" @click="show.withDesc = true" />
    <van-share-sheet
      v-model:show="show.withDesc"
      :title="t('title')"
      :options="optionsWithDesc"
      :description="t('description')"
      @select="onSelect"
    />
  </demo-block>
</template>

<script lang="ts">
import { computed, reactive } from 'vue';
import { useTranslate } from '@demo/use-translate';
import Toast from '../../toast';

const i18n = {
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
    withDesc: '展示描述信息',
    customIcon: '自定义图标',
    description: '描述信息',
    weappQrcode: '小程序码',
  },
  'en-US': {
    qq: 'QQ',
    name: 'Name',
    link: 'Link',
    title: 'Share',
    weibo: 'Weibo',
    wechat: 'Wechat',
    poster: 'Poster',
    qrcode: 'Qrcode',
    multiLine: 'Multi Line',
    showSheet: 'Show ShareSheet',
    withDesc: 'Show Description',
    customIcon: 'Custom Icon',
    description: 'Description',
    weappQrcode: 'Weapp Qrcode',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const show = reactive({
      basic: false,
      withDesc: false,
      multiLine: false,
      customIcon: false,
    });

    const options = computed(() => [
      { name: t('wechat'), icon: 'wechat' },
      { name: t('weibo'), icon: 'weibo' },
      { name: t('link'), icon: 'link' },
      { name: t('poster'), icon: 'poster' },
      { name: t('qrcode'), icon: 'qrcode' },
    ]);

    const multiLineOptions = computed(() => [
      [
        { name: t('wechat'), icon: 'wechat' },
        { name: t('weibo'), icon: 'weibo' },
        { name: t('qq'), icon: 'qq' },
      ],
      [
        { name: t('link'), icon: 'link' },
        { name: t('poster'), icon: 'poster' },
        { name: t('qrcode'), icon: 'qrcode' },
        { name: t('weappQrcode'), icon: 'weapp-qrcode' },
      ],
    ]);

    const customIconOptions = computed(() => [
      {
        name: t('name'),
        icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
      },
      {
        name: t('name'),
        icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
      },
      {
        name: t('name'),
        icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
      },
    ]);

    const optionsWithDesc = computed(() => [
      { name: t('wechat'), icon: 'wechat' },
      { name: t('weibo'), icon: 'weibo' },
      {
        name: t('link'),
        icon: 'link',
        description: t('description'),
      },
      { name: t('poster'), icon: 'poster' },
      { name: t('qrcode'), icon: 'qrcode' },
    ]);

    const onSelect = (option: { name: string }) => {
      Toast(option.name);
      show.basic = false;
      show.withDesc = false;
      show.multiLine = false;
      show.customIcon = false;
    };

    return {
      t,
      show,
      options,
      onSelect,
      optionsWithDesc,
      multiLineOptions,
      customIconOptions,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';
</style>
