<template>
  <section class="van-doc-demo-pages">
    <h1>示例工程</h1>

    <div class="card">
      <h3>介绍</h3>
      <p>
        我们提供了一个基于 Vue Cli 3 的示例工程，仓库地址为
        <a
          href="https://github.com/youzan/vant-demo"
          target="_blank"
        >Vant Demo</a>，示例工程会帮助你了解如下内容：
      </p>
      <ul>
        <li>基于 Vant 搭建单页面应用，配置按需引入组件</li>
        <li>配置基于 rem 的适配方案</li>
        <li>配置基于 viewport 的适配方案</li>
        <li>配置基于 TypeScript 的工程</li>
        <li>配置自定义主题色方案</li>
      </ul>
    </div>

    <div class="card">
      <h3>示例页面</h3>
      <p>下面是一些使用 Vant 搭建的示例页面，点击图片切换至对应示例。</p>
      <div class="van-doc-demo-pages__gallery">
        <div
          :class="['van-doc-demo-pages__item', { 'van-doc-demo-pages__item--active': index === currentDemo }]"
          v-for="(demo, index) in demos"
        >
          <h4>{{ demo.title }}</h4>
          <a :href="demo.source" target="_blank">源代码</a>
          <img :src="demo.preview" @click="onChangeDemo(demo, index)">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'van-doc-demo-pages',

  data() {
    return {
      currentDemo: 0
    };
  },

  computed: {
    demos() {
      return [
        {
          title: '商品详情',
          preview:
            'https://img.yzcdn.cn/public_files/2017/10/24/7070a8d1d6504b864c605114d32f2aae.png',
          url: '/vant-demo/#/goods',
          source:
            'https://github.com/youzan/vant-demo/blob/master/base/src/view/goods/index.vue'
        },
        {
          title: '用户中心',
          preview:
            'https://img.yzcdn.cn/public_files/2017/10/23/e1d70757e3ab88d39a360b704be8f43f.png',
          url: '/vant-demo/#/user',
          source:
            'https://github.com/youzan/vant-demo/blob/master/base/src/view/user/index.vue'
        },
        {
          title: '购物车',
          preview:
            'https://img.yzcdn.cn/public_files/2017/10/24/06b8b5ed3692314d434db7f6854dcdbe.png',
          url: '/vant-demo/#/cart',
          source:
            'https://github.com/youzan/vant-demo/blob/master/base/src/view/cart/index.vue'
        }
      ];
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
    display: inline-block;
    width: 28%;
    margin-bottom: 40px;
    text-align: center;

    &:nth-child(3n + 1),
    &:nth-child(3n + 2) {
      margin-right: 4%;
    }

    h4 {
      margin-top: 0;
    }

    img {
      width: 100%;
      background-color: #f8f8f8;
      border-radius: 3px;
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
      cursor: pointer;
    }

    a {
      display: inline-block;
      margin: 4px 0 7px;
      font-size: 12px;
    }

    &--active {
      img {
        box-shadow: 0 1px 4px rgba(51, 136, 255, 0.4), 0 0 0 1px rgba(51, 136, 255, 0.4);
      }
    }
  }
}
</style>
