<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link @click="showImagePreview()">
      {{ t('showImages') }}
    </van-cell>
  </demo-block>

  <demo-block card :title="t('customConfig')">
    <van-cell is-link @click="showImagePreview({ startPosition: 1 })">
      {{ t('startPosition') }}
    </van-cell>
    <van-cell is-link @click="showImagePreview({ closeable: true })">
      {{ t('showClose') }}
    </van-cell>
    <van-cell is-link @click="showImagePreview({ onClose })">
      {{ t('closeEvent') }}
    </van-cell>
  </demo-block>

  <demo-block card :title="t('beforeClose')">
    <van-cell is-link @click="showImagePreview({ beforeClose })">
      {{ t('beforeClose') }}
    </van-cell>
  </demo-block>

  <demo-block card :title="t('componentCall')">
    <van-cell is-link @click="componentCall">
      {{ t('componentCall') }}
    </van-cell>
    <van-image-preview v-model:show="show" :images="images" @change="onChange">
      <template #index>{{ t('index', index) }}</template>
    </van-image-preview>
  </demo-block>
</template>

<script>
import ImagePreview from '..';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
];

export default {
  i18n: {
    'zh-CN': {
      closed: '关闭',
      showClose: '展示关闭按钮',
      showImages: '预览图片',
      beforeClose: '异步关闭',
      closeEvent: '监听关闭事件',
      customConfig: '传入配置项',
      startPosition: '指定初始位置',
      componentCall: '组件调用',
      index: (index) => `第${index + 1}页`,
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
      index: (index) => `Page: ${index}`,
    },
  },

  data() {
    return {
      show: false,
      images,
      index: 0,
    };
  },

  methods: {
    onClose() {
      this.$toast(this.t('closed'));
    },

    beforeClose() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    },

    componentCall() {
      this.show = true;
    },

    onChange(index) {
      this.index = index;
    },

    showImagePreview(options = {}) {
      const instance = ImagePreview({
        images,
        ...options,
      });

      if (options.beforeClose) {
        setTimeout(() => {
          instance.close();
        }, 2000);
      }
    },
  },
};
</script>
