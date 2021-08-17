<script setup lang="ts">
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    title2: '背景图懒加载',
    title3: '懒加载模块',
  },
  'en-US': {
    title2: 'Lazyload Background Image',
    title3: 'Lazyload Component',
  },
};

const t = useTranslate(i18n);

const imageList = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
];
const backgroundImageList = [
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
];
const componentImageList = [
  'https://img.yzcdn.cn/vant/apple-8.jpg',
  'https://img.yzcdn.cn/vant/apple-7.jpg',
];
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <img v-for="img in imageList" :key="img" v-lazy="img" />
  </demo-block>

  <demo-block :title="t('title2')">
    <div
      v-for="img in backgroundImageList"
      :key="img"
      v-lazy:background-image="img"
    />
  </demo-block>

  <demo-block :title="t('title3')">
    <lazy-component>
      <img v-for="img in componentImageList" :key="img" v-lazy="img" />
    </lazy-component>
  </demo-block>
</template>

<style lang="less">
.demo-lazyload {
  padding-right: var(--van-padding-md);
  padding-left: var(--van-padding-md);

  img,
  div[lazy] {
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    margin-bottom: var(--van-padding-md);
    padding: var(--van-padding-md);
    background-color: white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 12px;
  }

  .van-doc-demo-block__title,
  .van-doc-demo-section__title {
    padding-left: 0;
  }
}
</style>
