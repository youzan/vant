<template><section class="demo-swipe"><h1 class="demo-title">Swipe 轮播</h1><example-block title="基础用法">
                <zan-swipe>
  <zan-swipe-item v-for="img in images">
    <img v-lazy="img" alt="">
  </zan-swipe-item>
</zan-swipe>



              </example-block><example-block title="自动轮播">
                <zan-swipe auto-play="" @pagechange:end="handlePageEnd">
  <zan-swipe-item v-for="img in autoImages">
    <img v-lazy="img" alt="">
  </zan-swipe-item>
</zan-swipe>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b swipe {
    .zan-swipe {
      height: 200px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  data() {
    return {
      autoImages: [
        'https://img.yzcdn.cn/upload_files/2017/03/09/FvkZahKoq1vkxLQFdVWeLf2UCqDz.png',
        'https://img.yzcdn.cn/upload_files/2017/03/09/Fk0rpe_svu9d5Xk3MUCWd1QeMXOu.png'
      ],
      images: [
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ]
    };
  },

  methods: {
    handlePageEnd(page, index) {
      console.log(page, index);
    }
  }
};
</script>