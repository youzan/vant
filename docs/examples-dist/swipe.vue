<template><section class="demo-swipe"><h1 class="demo-title">swipe</h1><example-block title="基础用法">
                <zan-swipe>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
</zan-swipe>

              </example-block><example-block title="自动轮播">
                <zan-swipe :auto-play="true" @pagechange:end="handlePageEnd">
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
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
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  methods: {
    handlePageEnd(page, index) {
      console.log(page, index);
    }
  }
};
</script>