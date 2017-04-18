<template><section class="demo-lazyload"><h1 class="demo-title">Lazyload 图片懒加载</h1><example-block title="基础用法">
                <ul class="image-list" ref="container">
  <li v-for="img in imageList">
    <img class="lazy-img" v-lazy="img">
  </li>
</ul>



              </example-block><example-block title="背景图懒加载">
                <ul class="image-list" ref="container">
  <li v-for="img in backgroundImageList">
    <div class="lazy-background" v-lazy:background-image="img"></div>
  </li>
</ul>



              </example-block><example-block title="懒加载模块">
                <lazy-component @show="handleComponentShow">
  <ul class="image-list">
    <li v-for="img in componentImageList">
      <img class="lazy-img" v-lazy="img">
    </li>
  </ul>
</lazy-component>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b lazyload {
    .lazy-img {
      display: block;
      width: 100%;
      height: auto;
    }

    .lazy-background {
      height: 300px;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/upload_files/2016/01/27/Fo2dFWjXYzWDR9Jaa1AEqk1jt7e0',
        'https://img.yzcdn.cn/upload_files/2016/01/27/FkyhiZfVE8tx-4qjxR2VeiqsSZYL',
        'https://img.yzcdn.cn/upload_files/2016/01/27/FpWD3kX18w8qjM6faH-4JqOWHsF4',
        'https://img.yzcdn.cn/upload_files/2016/09/08/9ff28d555e5760fa830344f12efa0087.jpg',
        'https://img.yzcdn.cn/upload_files/2016/11/13/FlZIeSgbSANSPkmUHttMjoIgY3cv.jpg',
        'https://img.yzcdn.cn/upload_files/2016/12/12/FuxgsGPRnupGu_eaMuaR8W0DuSKp.jpeg'
      ],
      backgroundImageList: [
        'https://img.yzcdn.cn/upload_files/2016/01/27/Fo2dFWjXYzWDR9Jaa1AEqk1jt7e0',
        'https://img.yzcdn.cn/upload_files/2016/01/27/FkyhiZfVE8tx-4qjxR2VeiqsSZYL'
      ],
      componentImageList: [
        'https://img.yzcdn.cn/upload_files/2017/03/09/FvkZahKoq1vkxLQFdVWeLf2UCqDz.png',
        'https://img.yzcdn.cn/upload_files/2017/03/09/Fk0rpe_svu9d5Xk3MUCWd1QeMXOu.png'
      ]
    };
  },

  methods: {
    handleComponentShow() {
      console.log('component show');
    }
  }
}
</script>