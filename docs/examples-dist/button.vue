<template><section class="demo-button"><h1 class="demo-title">Button 按钮</h1><example-block title="按钮功能">
                <van-row>
  <van-col span="24">
    <van-button block="">default</van-button>
  </van-col>
  <van-col span="24">
    <van-button type="primary" block="">primary</van-button>
  </van-col>
  <van-col span="24">
    <van-button type="danger" block="">danger</van-button>
  </van-col>
</van-row>

              </example-block><example-block title="禁用状态">
                <van-row>
  <van-col span="24">
    <van-button disabled block="">diabled</van-button>
  </van-col>
</van-row>

              </example-block><example-block title="按钮尺寸">
                <van-row>
  <van-col span="24">
    <van-button size="large">large</van-button>
  </van-col>
</van-row>
<van-row>
  <van-col span="24">
    <van-button size="normal">normal</van-button>
  </van-col>
</van-row>
<van-row>
  <van-col span="24">
    <van-button size="small">small</van-button>
  </van-col>
</van-row>
<van-row>
  <van-col span="24">
    <van-button size="mini">mini</van-button>
  </van-col>
</van-row>

              </example-block><example-block title="自定义按钮标签">
                <van-row>
  <van-col span="24">
    <van-button tag="a" type="primary" href="https://www.youzan.com" target="_blank">a标签按钮</van-button>
  </van-col>
</van-row>

              </example-block><example-block title="loading按钮">
                <van-row>
  <van-col span="24">
    <van-button type="primary" loading="" block="">loading</van-button>
  </van-col>
  <van-col span="24">
    <van-button loading="" block=""></van-button>
  </van-col>
</van-row>

              </example-block><example-block title="页面底部操作按钮">
                <van-row>
  <van-col span="24">
    <van-button type="primary" bottom-action="">立即购买</van-button>
  </van-col>
</van-row>
<van-row>
  <van-col span="12">
    <van-button bottom-action="">加入购物车</van-button>
  </van-col>
  <van-col span="12">
    <van-button type="primary" bottom-action="">立即购买</van-button>
  </van-col>
</van-row>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b button {
    .van-row {
      padding: 0 15px;
    }
    .van-col {
      margin-bottom: 10px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);</script>