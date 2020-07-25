<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-button type="primary" @click="showImagePreview">
        {{ t('button1') }}
      </van-button>
    </demo-block>

    <demo-block :title="t('button2')">
      <van-button type="primary" @click="showImagePreview(1)">
        {{ t('button2') }}
      </van-button>
    </demo-block>

    <demo-block :title="t('button4')">
      <van-button type="primary" @click="showImagePreview(0, 0, true)">
        {{ t('button4') }}
      </van-button>
    </demo-block>

    <demo-block :title="t('button3')">
      <van-button type="primary" @click="showImagePreview(0, 3000)">
        {{ t('button3') }}
      </van-button>
    </demo-block>

    <demo-block :title="t('componentCall')">
      <van-button type="primary" @click="componentCall">
        {{ t('componentCall') }}
      </van-button>
      <van-image-preview v-model="show" :images="images" @change="onChange">
        <template #index>{{ t('index', index) }}</template>
      </van-image-preview>
    </demo-block>
  </demo-section>
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
      button1: '预览图片',
      button2: '指定初始位置',
      button3: '异步关闭',
      button4: '展示关闭按钮',
      componentCall: '组件调用',
      index: (index) => `第${index + 1}页`,
    },
    'en-US': {
      button1: 'Show Images',
      button2: 'Custom Start Position',
      button3: 'Async Close',
      button4: 'Show Close Icon',
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
    componentCall() {
      this.show = true;
    },

    onChange(index) {
      this.index = index;
    },

    showImagePreview(position, timer, closeable) {
      const instance = ImagePreview({
        images,
        swipeDuration: 300,
        asyncClose: !!timer,
        closeable,
        startPosition: typeof position === 'number' ? position : 0,
      });

      if (timer) {
        setTimeout(() => {
          instance.close();
        }, timer);
      }
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-image-preview {
  background-color: @white;

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
