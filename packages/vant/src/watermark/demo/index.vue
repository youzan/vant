<script setup lang="ts">
import { ref } from 'vue';
import VanButton from '../../button';
import VanWatermark from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    customOpacity: '自定义透明度',
    customGap: '自定义间隔',
    customImage: '自定义图片',
    customRotate: '自定义倾斜角度',
    displayRange: '显示范围',
    htmlWatermark: 'HTML 水印',
    textWatermark: '文字水印',
    imageWatermark: '图片水印',
    switch: '切换',
  },
  'en-US': {
    customOpacity: 'Custom opacity',
    customGap: 'Custom Gap',
    customRotate: 'Custom Rotate',
    displayRange: 'Display Range',
    htmlWatermark: 'HTML Watermark',
    textWatermark: 'Text Watermark',
    imageWatermark: 'Image Watermark',
    switch: 'Swtich',
  },
});
const baseWatermarkFlag = ref<'text' | 'image'>('text');
const fullPage = ref(false);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <div class="demo-watermark-wrapper">
      <div style="position: relative; z-index: 9999">
        <van-button
          @click="
            () => {
              baseWatermarkFlag = 'text';
            }
          "
          >{{ t('textWatermark') }}</van-button
        >
        <van-button
          @click="
            () => {
              baseWatermarkFlag = 'image';
            }
          "
          style="margin: 0 var(--van-padding-md)"
          >{{ t('imageWatermark') }}</van-button
        >
      </div>
      <van-watermark
        content="Vant"
        v-if="baseWatermarkFlag === 'text'"
        :full-page="false"
      ></van-watermark>
      <van-watermark
        image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        v-if="baseWatermarkFlag === 'image'"
        :full-page="false"
      ></van-watermark>
    </div>
  </demo-block>

  <demo-block :title="t('customGap')">
    <div class="demo-watermark-wrapper">
      <van-watermark
        image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        :gap-x="20"
        :gap-y="10"
        :full-page="false"
      />
    </div>
  </demo-block>

  <demo-block :title="t('customOpacity')">
    <div class="demo-watermark-wrapper">
      <van-watermark
        :full-page="false"
        :opacity="0.5"
        image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      >
      </van-watermark>
    </div>
  </demo-block>

  <demo-block :title="t('customRotate')">
    <div class="demo-watermark-wrapper">
      <van-watermark
        image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        rotate="22"
        :full-page="false"
      />
    </div>
  </demo-block>

  <demo-block :title="t('displayRange')">
    <div class="demo-watermark-wrapper">
      <van-button
        @click="
          () => {
            fullPage = !fullPage;
          }
        "
      >
        {{ t('switch') }}
      </van-button>
      <van-watermark
        :full-page="fullPage"
        content="vant watermark"
        font-color="rgba(0, 0, 0, 0.15)"
      >
      </van-watermark>
    </div>
  </demo-block>

  <demo-block :title="t('htmlWatermark')">
    <div class="demo-watermark-wrapper">
      <van-watermark :width="150" :full-page="false">
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
