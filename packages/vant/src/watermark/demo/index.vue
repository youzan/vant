<script setup lang="ts">
import { ref } from 'vue';
import VanButton from '../../button';
import VanWatermark from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    customGap: '自定义间隔',
    customImage: '自定义图片',
  },
  'en-US': {
    error: 'Error',
    search: 'Search',
    network: 'Network',
    imageType: 'Image Type',
    customSize: 'Custom Size',
    description: 'Description',
    customImage: 'Custom Image',
    bottomContent: 'Bottom Content',
  },
});
const baseWatermarkFlag = ref<'text' | 'image'>('text');
const fullPage = ref(false);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <div class="demo-watermark-wrapper">
      <div style="position: relative; z-index: 2">
        <van-button
          @click="
            () => {
              baseWatermarkFlag = 'text';
            }
          "
          >文字水印</van-button
        >
        <van-button
          @click="
            () => {
              baseWatermarkFlag = 'image';
            }
          "
          style="margin: 0 var(--van-padding-md)"
          >图片水印</van-button
        >
      </div>
      <van-watermark
        content="Vant"
        v-if="baseWatermarkFlag === 'text'"
      ></van-watermark>
      <van-watermark
        image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        v-if="baseWatermarkFlag === 'image'"
      ></van-watermark>
    </div>
  </demo-block>

  <demo-block :title="t('customGap')">
    <div class="demo-watermark-wrapper">
      <van-watermark
        image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        :gap-x="20"
        :gap-y="10"
      />
    </div>
  </demo-block>

  <demo-block title="自定义倾斜角度">
    <div class="demo-watermark-wrapper">
      <van-watermark
        image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        rotate="22"
      />
    </div>
  </demo-block>

  <demo-block title="显示范围">
    <div class="demo-watermark-wrapper">
      <van-button
        @click="
          () => {
            fullPage = !fullPage;
          }
        "
      >
        切换
      </van-button>
      <van-watermark
        :full-page="fullPage"
        content="vant watermark"
        font-color="rgba(0, 0, 0, 0.15)"
      >
      </van-watermark>
    </div>
  </demo-block>

  <demo-block title="HTML 水印">
    <div class="demo-watermark-wrapper">
      <van-watermark :width="150">
        <div
          style="background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%)"
        >
          <p style="mix-blend-mode: difference; color: #fff">Vant watermark</p>
        </div>
      </van-watermark>
    </div>
  </demo-block>
</template>

<style lang="less">
.demo-watermark-wrapper {
  position: relative;
  height: 150px;
  background-color: var(--van-background-2);
  padding: var(--van-padding-md);
}
</style>
