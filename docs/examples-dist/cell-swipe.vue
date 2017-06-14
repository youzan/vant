<template><section class="demo-cell"><h1 class="demo-title">Cell Swipe 滑动单元格</h1><example-block title="基础用法">
                <van-cell-swipe :right-width="65" :left-width="65">
  <van-cell-group>
    <van-cell title="单元格1" value="单元格1内容"></van-cell>
  </van-cell-group>
  
  <span slot="right" class="swipe-delete-btn">
      删除
  </span>
  <span slot="left" class="swipe-check-btn">
      选择
  </span>
</van-cell-swipe>

              </example-block></section></template>
<style>
.swipe-delete-btn {
    background-color: #FF4444;
    color: #FFFFFF;
    font-size: 16px;
    width: 65px;
    height: 44px;
    display: inline-block;
    text-align: center;
    line-height: 44px;
}
.swipe-check-btn {
    background-color: #84c483;
    color: #FFFFFF;
    font-size: 16px;
    width: 65px;
    height: 44px;
    display: inline-block;
    text-align: center;
    line-height: 44px;
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);</script>