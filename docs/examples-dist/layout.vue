<template><section class="demo-layout"><h1 class="demo-title">Layout 布局</h1><example-block title="常规用法">
                <van-row>
  <van-col span="8">
    <div class="gray">span: 8</div>
  </van-col>
  <van-col span="8">
    <div class="white">span: 8</div>
  </van-col>
  <van-col span="8">
    <div class="gray">span: 8</div>
  </van-col>
</van-row>
<van-row>
  <van-col span="4">
    <div class="gray">span: 4</div>
  </van-col>
  <van-col span="10" offset="4">
    <div class="gray">offset: 4, span: 10</div>
  </van-col>
</van-row>
<van-row>
  <van-col offset="12" span="12">
    <div class="gray">offset: 12, span: 12</div>
  </van-col>
</van-row>

              </example-block><example-block title="在列元素之间增加间距">
                <van-row gutter="10">
  <van-col span="8">
    <div class="gray">span: 8</div>
  </van-col>
  <van-col span="8">
    <div class="gray">span: 8</div>
  </van-col>
  <van-col span="8">
    <div class="gray">span: 8</div>
  </van-col>
</van-row>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b layout {
    .van-row {
      padding: 0 20px;
    }
    .van-col {
      margin-bottom: 10px;
    }
  }
}

.gray {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    background: #666;
    color: #fff;
    text-align: center;
}
.white {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    background: #fff;
    color: #333;
    text-align: center;
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);</script>