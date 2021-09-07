<script setup lang="ts">
import VanCell from '../../cell';
import VanShareSheet, { ShareSheetOption, ShareSheetOptions } from '..';
import { ref, computed } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { Toast } from '../../toast';

const t = useTranslate({
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
    wechatMoments: '朋友圈',
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
    wechatMoments: 'Wechat Moments',
  },
});

const showBasic = ref(false);
const showWithDesc = ref(false);
const showMultiLine = ref(false);
const showCustomIcon = ref(false);

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
    { name: t('wechatMoments'), icon: 'wechat-moments' },
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

const optionsWithDesc = computed<ShareSheetOptions>(() => [
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

const onSelect = (option: ShareSheetOption) => {
  Toast(option.name);
  showBasic.value = false;
  showWithDesc.value = false;
  showMultiLine.value = false;
  showCustomIcon.value = false;
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link :title="t('showSheet')" @click="showBasic = true" />
    <van-share-sheet
      v-model:show="showBasic"
      :title="t('title')"
      :options="options"
      @select="onSelect"
    />
  </demo-block>

  <demo-block card :title="t('multiLine')">
    <van-cell is-link :title="t('showSheet')" @click="showMultiLine = true" />
    <van-share-sheet
      v-model:show="showMultiLine"
      :title="t('title')"
      :options="multiLineOptions"
      @select="onSelect"
    />
  </demo-block>

  <demo-block card :title="t('customIcon')">
    <van-cell is-link :title="t('showSheet')" @click="showCustomIcon = true" />
    <van-share-sheet
      v-model:show="showCustomIcon"
      :options="customIconOptions"
      @select="onSelect"
    />
  </demo-block>

  <demo-block card :title="t('withDesc')">
    <van-cell is-link :title="t('showSheet')" @click="showWithDesc = true" />
    <van-share-sheet
      v-model:show="showWithDesc"
      :title="t('title')"
      :options="optionsWithDesc"
      :description="t('description')"
      @select="onSelect"
    />
  </demo-block>
</template>
