<template><section class="demo-badge"><h1 class="demo-title">Badge 徽章</h1><example-block title="基础用法">
                <div class="badge-group-wrapper">
  <zan-badge-group>
    <zan-badge title="热销榜" info="8" url="http://baidu.com" @click="onItemClick"></zan-badge>
    <zan-badge title="花式寿司" info="99" @click="onItemClick"></zan-badge>
    <zan-badge title="火炽寿司" @click="onItemClick"></zan-badge>
    <zan-badge title="手握寿司" info="199" @click="onItemClick"></zan-badge>
  </zan-badge-group>
</div>

              </example-block><example-block title="选中某个badge">
                <div class="badge-group-wrapper">
  <zan-badge-group :active-key="2">
    <zan-badge title="热销榜" info="8" url="http://baidu.com" @click="onItemClick"></zan-badge>
    <zan-badge title="花式寿司" info="99" @click="onItemClick"></zan-badge>
    <zan-badge title="火炽寿司" @click="onItemClick"></zan-badge>
    <zan-badge title="手握寿司" info="199" @click="onItemClick"></zan-badge>
  </zan-badge-group>
</div>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b badge {
    .badge-group-wrapper {
      padding: 30px 20px;
      background-color: #fff;
    }

    .zan-badge-group {
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