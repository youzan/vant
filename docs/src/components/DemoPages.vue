<template>
  <section class="van-doc-demo-pages">
    <h2>{{ $t('title') }}</h2>
    <p>{{ $t('description') }}</p>
    <div class="van-doc-demo-pages__gallery">
      <div
        :class="['van-doc-demo-pages__item', { 'van-doc-demo-pages__item--active': index === currentDemo }]"
        v-for="(demo, index) in demos"
      >
        <h4>{{ demo.title }}</h4>
        <a
          :href="demo.source"
          target="_blank"
        >
          {{ $t('source') }}
        </a>
        <img
          :src="demo.preview"
          @click="onChangeDemo(demo, index)"
        >
      </div>
    </div>
  </section>
</template>

<script>
import { Locale } from '../../../packages';

Locale.add({
  'zh-CN': {
    vanDocDemoPages: {
      title: '示例',
      source: '源代码',
      description: '下面是一些使用 Vant 搭建的示例页面，点击图片切换至对应示例。',
      goodsDetail: '商品详情',
      userCenter: '会员中心',
      shoppingCart: '购物车'
    }
  },
  'en-US': {
    vanDocDemoPages: {
      title: 'Demo Pages',
      source: 'Source code',
      description: 'Here are some of the demo pages built using Vant, click on the picture to switch to the corresponding demo.',
      goodsDetail: 'Goods Detail',
      userCenter: 'User Center',
      shoppingCart: 'Shopping Cart'
    }
  }
});

export default {
  name: 'van-doc-demo-pages',

  data() {
    return {
      currentDemo: 0
    };
  },

  computed: {
    demos() {
      return [{
        title: this.$t('goodsDetail'),
        preview: 'https://img.yzcdn.cn/public_files/2017/10/24/7070a8d1d6504b864c605114d32f2aae.png',
        url: 'https://youzan.github.io/vant-demo/#/goods',
        source: 'https://github.com/youzan/vant-demo/blob/master/base/src/view/goods/index.vue'
      }, {
        title: this.$t('userCenter'),
        preview: 'https://img.yzcdn.cn/public_files/2017/10/23/e1d70757e3ab88d39a360b704be8f43f.png',
        url: 'https://youzan.github.io/vant-demo/#/user',
        source: 'https://github.com/youzan/vant-demo/blob/master/base/src/view/user/index.vue'
      }, {
        title: this.$t('shoppingCart'),
        preview: 'https://img.yzcdn.cn/public_files/2017/10/24/06b8b5ed3692314d434db7f6854dcdbe.png',
        url: 'https://youzan.github.io/vant-demo/#/cart',
        source: 'https://github.com/youzan/vant-demo/blob/master/base/src/view/cart/index.vue'
      }];
    }
  },

  beforeMount() {
    this.$emit('changeDemoURL', this.demos[0].url);
  },

  methods: {
    onChangeDemo(demo, index) {
      this.currentDemo = index;
      this.$emit('changeDemoURL', demo.url);
    }
  }
};
</script>

<style lang="less">
.van-doc-demo-pages {
  &__gallery {
    margin-top: 30px;
  }

  &__item {
    width: 28%;
    text-align: center;
    margin-bottom: 40px;
    display: inline-block;

    &:nth-child(3n+1),
    &:nth-child(3n+2) {
      margin-right: 4%;
    }

    h4 {
      font-size: 14px;
      line-height: 20px;
      font-weight: normal;
    }

    img {
      width: 100%;
      cursor: pointer;
      border-radius: 3px;
      background-color: #f8f8f8;
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    }

    a {
      font-size: 12px;
      margin: 4px 0 7px;
      display: inline-block;
    }

    &--active {
      img {
        box-shadow: 0 1px 4px rgba(51, 136, 255, .4), 0 0 0 1px rgba(51, 136, 255, .4);
      }
    }
  }
}
</style>
