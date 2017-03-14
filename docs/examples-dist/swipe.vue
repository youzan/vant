<template><section class="demo-swipe"><h1 class="demo-title">swipe</h1><example-block title="">
                <zan-swipe>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
</zan-swipe>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b swipe {
    .zan-swipe {
      height: 200px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);</script>