<template>
  <demo-block :title="t('basicUsage')">
    <img v-for="img in imageList" :key="img" v-lazy="img" />
  </demo-block>

  <demo-block :title="t('title2')">
    <div
      v-for="img in backgroundImageList"
      :key="img"
      v-lazy:background-image="img"
    />
  </demo-block>

  <demo-block :title="t('title3')">
    <lazy-component>
      <img v-for="img in componentImageList" :key="img" v-lazy="img" />
    </lazy-component>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '背景图懒加载',
      title3: '懒加载模块',
    },
    'en-US': {
      title2: 'Lazyload Background Image',
      title3: 'Lazyload Component',
    },
  },

  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg',
      ],
      backgroundImageList: [
        'https://img.yzcdn.cn/vant/apple-5.jpg',
        'https://img.yzcdn.cn/vant/apple-6.jpg',
      ],
      componentImageList: [
        'https://img.yzcdn.cn/vant/apple-8.jpg',
        'https://img.yzcdn.cn/vant/apple-7.jpg',
      ],
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-lazyload {
  padding-right: @padding-md;
  padding-left: @padding-md;

  img,
  div[lazy] {
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    margin-bottom: @padding-md;
    padding: @padding-md;
    background-color: white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 12px;
  }

  .van-doc-demo-block__title,
  .van-doc-demo-section__title {
    padding-left: 0;
  }
}
</style>
