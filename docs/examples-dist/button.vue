<template><section class="demo-button"><h1 class="demo-title">button</h1><example-block title="按钮功能">
                <zan-row>
  <zan-col span="24">
    <zan-button block="">default</zan-button>
  </zan-col>
  <zan-col span="24">
    <zan-button type="primary" block="">primary</zan-button>
  </zan-col>
  <zan-col span="24">
    <zan-button type="danger" block="">danger</zan-button>
  </zan-col>
</zan-row>

              </example-block><example-block title="禁用状态">
                <zan-row>
  <zan-col span="24">
    <zan-button disabled block="">diabled</zan-button>
  </zan-col>
</zan-row>

              </example-block><example-block title="按钮尺寸">
                <zan-row>
  <zan-col span="24">
    <zan-button size="large">large</zan-button>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="24">
    <zan-button size="normal">normal</zan-button>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="24">
    <zan-button size="small">small</zan-button>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="24">
    <zan-button size="mini">mini</zan-button>
  </zan-col>
</zan-row>

              </example-block><example-block title="自定义按钮标签">
                <zan-row>
  <zan-col span="24">
    <zan-button tag="a" type="primary" href="https://www.youzan.com" target="_blank">a标签按钮</zan-button>
  </zan-col>
</zan-row>

              </example-block><example-block title="loading按钮">
                <zan-row>
  <zan-col span="24">
    <zan-button type="primary" loading="" block="">loading</zan-button>
  </zan-col>
  <zan-col span="24">
    <zan-button loading="" block=""></zan-button>
  </zan-col>
</zan-row>

              </example-block><example-block title="">
                <zan-row>
  <zan-col span="24">
    <zan-button type="primary" bottom-action="">立即购买</zan-button>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="12">
    <zan-button bottom-action="">加入购物车</zan-button>
  </zan-col>
  <zan-col span="12">
    <zan-button type="primary" bottom-action="">立即购买</zan-button>
  </zan-col>
</zan-row>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b button {
    .zan-row {
      padding: 0 20px;
    }
    .zan-col {
      margin-bottom: 10px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);</script>