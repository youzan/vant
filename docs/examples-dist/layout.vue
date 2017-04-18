<template><section class="demo-layout"><h1 class="demo-title">Layout 布局</h1><example-block title="常规用法">
                <zan-row>
  <zan-col span="8">
    <div class="gray">span: 8</div>
  </zan-col>
  <zan-col span="8">
    <div class="white">span: 8</div>
  </zan-col>
  <zan-col span="8">
    <div class="gray">span: 8</div>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="4">
    <div class="gray">span: 4</div>
  </zan-col>
  <zan-col span="10" offset="4">
    <div class="gray">offset: 4, span: 10</div>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col offset="12" span="12">
    <div class="gray">offset: 12, span: 12</div>
  </zan-col>
</zan-row>

              </example-block><example-block title="在列元素之间增加间距">
                <zan-row gutter="10">
  <zan-col span="8">
    <div class="gray">span: 8</div>
  </zan-col>
  <zan-col span="8">
    <div class="gray">span: 8</div>
  </zan-col>
  <zan-col span="8">
    <div class="gray">span: 8</div>
  </zan-col>
</zan-row>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b layout {
    .zan-row {
      padding: 0 20px;
    }
    .zan-col {
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