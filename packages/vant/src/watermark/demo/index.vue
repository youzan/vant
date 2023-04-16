<script setup lang="ts">
import { ref } from 'vue';
import VanButton from '../../button';
import VanWatermark from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    switch: '切换',
    customOpacity: '自定义透明度',
    customGap: '自定义间隔',
    customImage: '自定义图片',
    customRotate: '自定义倾斜角度',
    displayRange: '显示范围',
    htmlWatermark: 'HTML 水印',
    textWatermark: '文字水印',
    imageWatermark: '图片水印',
  },
  'en-US': {
    switch: 'Switch',
    customOpacity: 'Custom opacity',
    customGap: 'Custom Gap',
    customRotate: 'Custom Rotate',
    displayRange: 'Display Range',
    htmlWatermark: 'HTML Watermark',
    textWatermark: 'Text Watermark',
    imageWatermark: 'Image Watermark',
  },
});

const fullPage = ref(false);
</script>

<template>
  <demo-block :title="t('textWatermark')">
    <div class="demo-watermark-wrapper">
      <van-watermark content="Vant" :full-page="false" />
    </div>
  </demo-block>

  <demo-block :title="t('imageWatermark')">
    <div class="demo-watermark-wrapper">
      <van-watermark
        image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png"
        opacity="0.2"
        :full-page="false"
      />
    </div>
  </demo-block>

  <demo-block :title="t('customGap')">
    <div class="demo-watermark-wrapper">
      <van-watermark
        image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png"
        :gap-x="30"
        :gap-y="10"
        opacity="0.2"
        :full-page="false"
      />
    </div>
  </demo-block>

  <demo-block :title="t('customRotate')">
    <div class="demo-watermark-wrapper">
      <van-watermark
        image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png"
        rotate="22"
        opacity="0.2"
        :full-page="false"
      />
    </div>
  </demo-block>

  <demo-block :title="t('displayRange')">
    <div class="demo-watermark-wrapper">
      <van-button type="primary" @click="fullPage = !fullPage">
        {{ t('switch') }}
      </van-button>
      <van-watermark
        :full-page="fullPage"
        opacity="0.2"
        image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png"
      >
      </van-watermark>
    </div>
  </demo-block>

  <demo-block :title="t('htmlWatermark')">
    <div class="demo-watermark-wrapper">
      <van-watermark :width="150" :full-page="false">
        <template #content>
          <div
            style="
              background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%);
            "
          >
            <p style="mix-blend-mode: difference; color: #fff">
              Vant watermark
            </p>
          </div>
        </template>
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
