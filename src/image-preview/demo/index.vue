<template>
  <demo-section>
    <demo-block card :title="t('basicUsage')">
      <van-cell is-link @click="showImagePreview">
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

    <demo-block card :title="t('asyncClose')">
      <van-cell is-link @click="showImagePreview({ asyncClose: true })">
        {{ t('asyncClose') }}
      </van-cell>
    </demo-block>

    <demo-block card :title="t('componentCall')">
      <van-cell is-link @click="componentCall">
        {{ t('componentCall') }}
      </van-cell>
      <van-image-preview v-model="show" :images="images" @change="onChange">
        <template #index>{{ t('index', index) }}</template>
      </van-image-preview>
    </demo-block>
  </demo-section>
</template>

<script>
import ImagePreview from '..';

const images = [
  'https://img01.yzcdn.cn/vant/apple-1.jpg',
  'https://img01.yzcdn.cn/vant/apple-2.jpg',
  'https://img01.yzcdn.cn/vant/apple-3.jpg',
  'https://img01.yzcdn.cn/vant/apple-4.jpg',
];

export default {
  i18n: {
    'zh-CN': {
      closed: '关闭',
      showClose: '展示关闭按钮',
      showImages: '预览图片',
      asyncClose: '异步关闭',
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
      asyncClose: 'Async Close',
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

    componentCall() {
      this.show = true;
    },

    onChange(index) {
      this.index = index;
    },

    showImagePreview(options) {
      const instance = ImagePreview({
        images,
        ...options,
      });

      if (options.asyncClose) {
        setTimeout(() => {
          instance.close();
        }, 2000);
      }
    },
  },
};
</script>
