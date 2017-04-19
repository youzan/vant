<template><section class="demo-panel"><h1 class="demo-title">Panel 面板</h1><example-block title="基础用法">
                <van-panel title="标题" desc="标题描述" status="状态">
  <div class="panel-content">
    panel内容
  </div>
</van-panel>

              </example-block><example-block title="高级用法">
                <van-panel title="标题" desc="标题描述" status="状态">
  <van-card title="商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余" desc="商品SKU1，商品SKU2" thumb="https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg">
    <div class="van-card__row" slot="title">
      <h4 class="van-card__title">商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余</h4>
      <span class="van-card__price">¥ 2.00</span>
    </div>
    <div class="van-card__row" slot="desc">
      <h4 class="van-card__desc">商品sku</h4>
      <span class="van-card__num">x 2</span>
    </div>
    <div class="van-card__footer" slot="footer">
      <van-button size="mini">按钮一</van-button>
      <van-button size="mini">按钮二</van-button>
    </div>
  </van-card>
  <div class="van-panel-sum">
    合计：<span>¥ 1999.90</span>
  </div>
  <div class="van-panel-buttons" slot="footer">
    <van-button size="small">按钮一</van-button>
    <van-button size="small" type="danger">按钮二</van-button>
  </div>
</van-panel>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b panel {
    .van-panel-sum {
      background: #fff;
      text-align: right;
      font-size: 14px;
      color: #333;
      line-height: 30px;
      padding-right: 15px;

      span {
        color: red;
      }
    }

    .van-panel-buttons {
      text-align: right;

      .van-button {
        margin-left: 5px;
      }
    }

    .panel-content {
      padding: 20px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);</script>