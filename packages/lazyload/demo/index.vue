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
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ],
      backgroundImageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg'
      ],
      componentImageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/100a7845756a70af2df513bdd1307d0e.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/8a4f5be8289cb3a7434fc19a3de780a2.jpg'
      ]
    };
  }
};
</script>

<style lang="less">
.demo-lazyload {
  padding: 0 15px;

  img,
  div[lazy] {
    padding: 15px;
    width: 100%;
    height: 250px;
    margin: 10px 0 0;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: 315px 250px;
    background-position: 15px;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }

  .van-doc-demo-block__title,
  .van-doc-demo-section__title {
    padding-left: 0;
  }
}
</style>
