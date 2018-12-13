<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-swipe
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-swipe :autoplay="3000">
        <van-swipe-item
          v-for="(image, index) in images"
          :key="index"
        >
          <img v-lazy="image">
        </van-swipe-item>
      </van-swipe>
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-swipe
        indicator-color="white"
        @change="onChange"
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-swipe
        vertical
        :autoplay="3000"
        indicator-color="white"
        class="demo-swipe--vertical"
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </demo-block>

    <demo-block :title="$t('title5')">
      <van-swipe
        :autoplay="3000"
        :width="300"
        :loop="false"
        indicator-color="white"
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </demo-block>

    <demo-block :title="$t('title6')">
      <van-swipe @change="onChange">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>

        <div
          class="custom-indicator"
          slot="indicator"
        >
          {{ current + 1 }}/4
        </div>
      </van-swipe>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '图片懒加载',
      title3: '监听 change 事件',
      title4: '纵向滚动',
      title5: '设置滑块大小',
      title6: '自定义指示器',
      message: '当前 Swipe 索引：'
    },
    'en-US': {
      title2: 'Image Lazyload',
      title3: 'Change Event',
      title4: 'Vertical Scrolling',
      title5: 'Set Swiper Item Size',
      title6: 'Custom indicator',
      message: 'Current Swipe index:'
    }
  },

  data() {
    return {
      current: 0,
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ]
    };
  },

  methods: {
    onChange(index) {
      this.current = index;
      this.$toast(this.$t('message') + index);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-swipe {
  padding-bottom: 30px;

  .van-swipe {
    cursor: pointer;

    &-item {
      color: @white;
      font-size: 20px;
      text-align: center;
      line-height: 150px;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      width: 100%;
      height: 240px;
      display: block;
      padding: 30px 60px;
      box-sizing: border-box;
      background-color: @white;
      pointer-events: none;
    }
  }

  &--vertical {
    height: 200px;

    .van-swipe-item {
      line-height: 200px;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: @white;
    background: rgba(0, 0, 0, .1);
  }
}
</style>
