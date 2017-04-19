<template><section class="demo-tab"><h1 class="demo-title">Tab 标签</h1><example-block title="基础用法">
                <van-tabs>
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
  <van-tab title="选项四">内容四</van-tab>
  <van-tab title="选项五">内容五</van-tab>
</van-tabs>

              </example-block><example-block title="基础用法">
                <van-tabs :active="active">
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
  <van-tab title="选项四">内容四</van-tab>
  <van-tab title="选项五">内容五</van-tab>
</van-tabs>

              </example-block><example-block title="禁用tab">
                <van-tabs>
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二" disabled @disabled="popalert">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
  <van-tab title="选项四">内容四</van-tab>
  <van-tab title="选项五">内容五</van-tab>
</van-tabs>



              </example-block><example-block title="card样式">
                <van-tabs type="card">
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
  <van-tab title="选项四">内容四</van-tab>
  <van-tab title="选项五">内容五</van-tab>
</van-tabs>

              </example-block><example-block title="自定义样式">
                <van-tabs active="2" class="custom-tabwrap">
    <van-tab title="选项一" class="custom-pane">内容一</van-tab>
    <van-tab title="选项二" class="custom-pane">内容二</van-tab>
    <van-tab title="选项三" class="custom-pane">内容三</van-tab>
    <van-tab title="选项四" class="custom-pane">内容四</van-tab>
    <van-tab title="选项五" class="custom-pane">内容五</van-tab>
</van-tabs>



              </example-block><example-block title="click事件">
                <van-tabs @click="handleTabClick">
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
  <van-tab title="选项四">内容四</van-tab>
  <van-tab title="选项五">内容五</van-tab>
</van-tabs>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b tab {
    .van-tab__pane {
      background-color: #fff;
      padding: 20px;
    }

    .van-tabs--card .van-tab__pane {
      background-color: transparent;
    }

    .custom-tabwrap .van-tab-active {
      color: #20a0ff;
    }
    .custom-tabwrap .van-tabs-nav-bar {
      background: #20a0ff;
    }
    .custom-pane {
      text-align: center;
      height: 50px;
      line-height: 50px;
    }
  }
}
</style><style>
  .custom-tabwrap .van-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .van-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  data() {
    return {
      active: 2
    };
  },
  mounted() {
    setTimeout(() => {
      this.active = 3;
    }, 1000);
  },
  methods: {
    popalert() {
      alert('haha')
    },

    handleTabClick(index) {
      alert(index);
    }
  }
};
</script>