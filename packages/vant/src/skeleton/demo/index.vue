<script setup lang="ts">
import VanSkeleton from '..';
import { SkeletonImage as VanSkeletonImage } from '../../skeleton-image';
import { SkeletonParagraph as VanSkeletonParagraph } from '../../skeleton-paragraph';
import VanSwitch from '../../switch';
import { ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    showAvatar: '显示头像',
    showChildren: '显示子组件',
    title: '关于 Vant',
    desc: 'Vant 是一套轻量、可定制的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。',
    customContent: '自定义展示内容',
  },
  'en-US': {
    showAvatar: 'Show Avatar',
    showChildren: 'Show Children',
    title: 'About Vant',
    desc: 'Vant is a set of Mobile UI Components built on Vue.',
    customContent: 'Custom Content',
  },
});

const show = ref(false);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-skeleton title :row="3" />
  </demo-block>

  <demo-block :title="t('showAvatar')">
    <van-skeleton title avatar :row="3" />
  </demo-block>

  <demo-block :title="t('showChildren')">
    <van-switch v-model="show" />
    <van-skeleton title avatar :row="3" :loading="!show">
      <div class="demo-preview">
        <img :src="cdnURL('logo.png')" />
        <div class="demo-content">
          <h3>{{ t('title') }}</h3>
          <p>{{ t('desc') }}</p>
        </div>
      </div>
    </van-skeleton>
  </demo-block>

  <demo-block :title="t('customContent')">
    <van-skeleton>
      <template #template>
        <div :style="{ display: 'flex', width: '100%' }">
          <van-skeleton-image />
          <div :style="{ flex: 1, marginLeft: '16px' }">
            <van-skeleton-paragraph row-width="60%" />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
          </div>
        </div>
      </template>
    </van-skeleton>
  </demo-block>
</template>

<style lang="less">
.demo-skeleton {
  background-color: var(--van-background-2);

  .van-switch {
    margin: 0 var(--van-padding-md) var(--van-padding-xs);
  }

  .demo-preview {
    display: flex;
    padding: 0 var(--van-padding-md);

    .demo-content {
      padding-top: 6px;

      h3 {
        margin: 0;
        font-size: 18px;
        line-height: 20px;
      }

      p {
        margin: 13px 0 0;
        font-size: 14px;
        line-height: 20px;
      }
    }

    img {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-right: var(--van-padding-md);
    }
  }
}
</style>
