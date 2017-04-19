<template><section class="demo-tag"><h1 class="demo-title">Tag 标记</h1><example-block title="基础用法">
                <div class="tags-container">
  <van-tag>返现</van-tag>
  <van-tag plain="">返现</van-tag>
</div>
<div class="tags-container">
  <van-tag type="danger">返现</van-tag>
  <van-tag type="danger">四字标签</van-tag>
  <van-tag type="danger">一</van-tag>
</div>

              </example-block><example-block title="高级用法">
                <div class="tags-container">
  <van-tag type="danger">返现</van-tag>
  <van-tag plain="" type="danger">返现</van-tag>
</div>
<div class="tags-container">
  <van-tag type="primary">返现</van-tag>
  <van-tag plain="" type="primary">返现</van-tag>
</div>
<div class="tags-container">
  <van-tag type="success">返现</van-tag>
  <van-tag plain="" type="success">返现</van-tag>
</div>
<div class="tags-container">
  <van-tag type="danger" mark="">返现</van-tag>
</div>

              </example-block></section></template>
<style>
.tags-container {
  padding: 5px 15px;

  .van-tag + .van-tag {
    margin-left: 10px;
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);</script>