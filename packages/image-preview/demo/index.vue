<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button @click="showImagePreview">{{ $t('button1') }}</van-button>
    </demo-block>

    <demo-block :title="$t('button2')">
      <van-button @click="showImagePreview(1)">{{ $t('button2') }}</van-button>
    </demo-block>

    <demo-block :title="$t('button3')">
      <van-button @click="showImagePreview(0, 1000)">{{ $t('button3') }}</van-button>
    </demo-block>
  </demo-section>
</template>

<script>
import { ImagePreview } from '../..';

const images = [
  'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
  'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
  'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
  'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
];

export default {
  i18n: {
    'zh-CN': {
      button1: '预览图片',
      button2: '指定初始位置',
      button3: '异步关闭'
    },
    'en-US': {
      button1: 'Show Images',
      button2: 'Custom Start Position',
      button3: 'Async Close'
    }
  },

  methods: {
    showImagePreview(position, timer) {
      const instance = ImagePreview({
        images,
        asyncClose: !!timer,
        startPosition: typeof position === 'number' ? position : 0
      });

      if (timer) {
        setTimeout(() => {
          instance.close();
        }, timer);
      }
    }
  }
};
</script>

<style lang="less">
.demo-image-preview {
  .van-button {
    margin-left: 15px;
  }
}

.van-image-preview {
  img {
    -webkit-user-drag: none;
  }
}
</style>
