<template><section class="demo-badge"><h1 class="demo-title">Badge 徽章</h1><example-block title="基础用法">
                <div class="badge-group-wrapper">
  <van-badge-group>
    <van-badge title="热销榜" info="8" url="http://baidu.com" @click="onItemClick"></van-badge>
    <van-badge title="花式寿司" info="99" @click="onItemClick"></van-badge>
    <van-badge title="火炽寿司" @click="onItemClick"></van-badge>
    <van-badge title="手握寿司" info="199" @click="onItemClick"></van-badge>
  </van-badge-group>
</div>

              </example-block><example-block title="选中某个badge">
                <div class="badge-group-wrapper">
  <van-badge-group :active-key="2">
    <van-badge title="热销榜" info="8" url="http://baidu.com" @click="onItemClick"></van-badge>
    <van-badge title="花式寿司" info="99" @click="onItemClick"></van-badge>
    <van-badge title="火炽寿司" @click="onItemClick"></van-badge>
    <van-badge title="手握寿司" info="199" @click="onItemClick"></van-badge>
  </van-badge-group>
</div>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b badge {
    .badge-group-wrapper {
      padding: 30px 20px;
      background-color: #fff;
    }

    .van-badge-group {
      margin: 0 auto;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
  export default {
    data() {
      return {
        activeKey: '2'
      };
    },
    methods: {
      onItemClick(e, data) {
        this.activeKey = data.mark;
      }
    }
  };
</script>