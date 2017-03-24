<template><section class="demo-badge"><h1 class="demo-title">badge</h1><example-block title="基础用法">
                <zan-badge-group :active-key="activeKey">
  <zan-badge mark="0" title="热销榜" info="8" url="http://baidu.com" @click="onItemClick"></zan-badge>
  <zan-badge mark="1" title="花式寿司" info="99" @click="onItemClick"></zan-badge>
  <zan-badge mark="2" title="火炽寿司" @click="onItemClick"></zan-badge>
  <zan-badge mark="3" title="手握寿司" info="199" @click="onItemClick"></zan-badge>
</zan-badge-group>

              </example-block></section></template>

<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
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