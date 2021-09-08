<script setup lang="ts">
import VanCell from '../../cell';
import { ImagePreview, ImagePreviewOptions } from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { Toast } from '../../toast';

const VanImagePreview = ImagePreview.Component;

const t = useTranslate({
  'zh-CN': {
    closed: '关闭',
    showClose: '展示关闭按钮',
    showImages: '预览图片',
    beforeClose: '异步关闭',
    closeEvent: '监听关闭事件',
    customConfig: '传入配置项',
    startPosition: '指定初始位置',
    componentCall: '组件调用',
    index: (index: number) => `第${index + 1}页`,
  },
  'en-US': {
    closed: 'closed',
    showClose: 'Show Close Icon',
    showImages: 'Show Images',
    beforeClose: 'Before Close',
    closeEvent: 'Close Event',
    customConfig: 'Custom Config',
    startPosition: 'Set Start Position',
    componentCall: 'Component Call',
    index: (index: number) => `Page: ${index}`,
  },
});

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
];

const show = ref(false);
const index = ref(0);

const onClose = () => Toast(t('closed'));

const beforeClose = () =>
  new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

const showComponentCall = () => {
  show.value = true;
};

const onChange = (newIndex: number) => {
  index.value = newIndex;
};

const showImagePreview = (options: Partial<ImagePreviewOptions> = {}) => {
  const instance = ImagePreview({
    images,
    ...options,
  });

  if (options.beforeClose) {
    setTimeout(() => {
      instance?.close();
    }, 2000);
  }
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link :value="t('showImages')" @click="showImagePreview()" />
  </demo-block>

  <demo-block card :title="t('customConfig')">
    <van-cell
      is-link
      :value="t('startPosition')"
      @click="showImagePreview({ startPosition: 1 })"
    />
    <van-cell
      is-link
      :value="t('showClose')"
      @click="showImagePreview({ closeable: true })"
    />
    <van-cell
      is-link
      :value="t('closeEvent')"
      @click="showImagePreview({ onClose })"
    />
  </demo-block>

  <demo-block card :title="t('beforeClose')">
    <van-cell
      is-link
      :value="t('beforeClose')"
      @click="showImagePreview({ beforeClose })"
    />
  </demo-block>

  <demo-block card :title="t('componentCall')">
    <van-cell is-link :value="t('componentCall')" @click="showComponentCall" />
    <van-image-preview v-model:show="show" :images="images" @change="onChange">
      <template #index>{{ t('index', index) }}</template>
    </van-image-preview>
  </demo-block>
</template>
