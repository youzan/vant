<template><section class="demo-tab"><h1 class="demo-title">tab</h1><example-block title="基础用法">
                <zan-tabs>
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>

              </example-block><example-block title="基础用法">
                <zan-tabs :active="active">
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>

              </example-block><example-block title="禁用tab">
                <zan-tabs>
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二" disabled @disabled="popalert">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>



              </example-block><example-block title="card样式">
                <zan-tabs type="card">
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>

              </example-block><example-block title="自定义样式">
                <zan-tabs active="2" class="custom-tabwrap">
    <zan-tab title="选项一" class="custom-pane">内容一</zan-tab>
    <zan-tab title="选项二" class="custom-pane">内容二</zan-tab>
    <zan-tab title="选项三" class="custom-pane">内容三</zan-tab>
    <zan-tab title="选项四" class="custom-pane">内容四</zan-tab>
    <zan-tab title="选项五" class="custom-pane">内容五</zan-tab>
</zan-tabs>



              </example-block><example-block title="click事件">
                <zan-tabs @click="handleTabClick">
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b tab {
    .zan-tab__pane {
      background-color: #fff;
      padding: 20px;
    }

    .zan-tabs--card .zan-tab__pane {
      background-color: transparent;
    }

    .custom-tabwrap .zan-tab-active {
      color: #20a0ff;
    }
    .custom-tabwrap .zan-tabs-nav-bar {
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
  .custom-tabwrap .zan-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .zan-tabs-nav-bar {
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