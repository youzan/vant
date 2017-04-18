<template><section class="demo-card"><h1 class="demo-title">Card 图文组件</h1><example-block title="基础用法">
                <zan-card title="商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余" desc="描述" thumb="https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg">
</zan-card>

              </example-block><example-block title="高级用法">
                <zan-card thumb="https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg">
  <div class="zan-card__row" slot="title">
    <h4 class="zan-card__title">商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余</h4>
    <span class="zan-card__price">¥ 2.00</span>
  </div>
  <div class="zan-card__row" slot="desc">
    <span class="zan-card__num">x 2</span>
  </div>
  <div class="zan-card__footer" slot="footer">
    <zan-button size="mini">按钮一</zan-button>
    <zan-button size="mini">按钮二</zan-button>
  </div>
</zan-card>

              </example-block></section></template>

<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);</script>