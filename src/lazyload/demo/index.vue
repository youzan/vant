<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <img
        v-for="img in imageList"
        v-lazy="img"
      >
    </demo-block>

    <demo-block :title="$t('title2')">
      <div
        v-for="img in backgroundImageList"
        v-lazy:background-image="img"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <lazy-component>
        <img
          v-for="img in componentImageList"
          v-lazy="img"
        >
      </lazy-component>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '背景图懒加载',
      title3: '懒加载模块'
    },
    'en-US': {
      title2: 'Lazyload Background Image',
      title3: 'Lazyload Component'
    }
  },

  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg'
      ],
      backgroundImageList: [
        'https://img.yzcdn.cn/vant/apple-5.jpg',
        'https://img.yzcdn.cn/vant/apple-6.jpg'
      ],
      componentImageList: [
        'https://img.yzcdn.cn/vant/apple-8.jpg',
        'https://img.yzcdn.cn/vant/apple-7.jpg'
      ]
    };
  }
};
</script>

<style lang="less">
.demo-lazyload {
  padding: 15px;

  img,
  div[lazy] {
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    margin: 10px 0 0;
    padding: 15px;
    background-color: white;
    background-repeat: no-repeat;
    background-position: 15px;
    background-size: 315px 250px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  .van-doc-demo-block__title,
  .van-doc-demo-section__title {
    padding-left: 0;
  }
}
</style>
