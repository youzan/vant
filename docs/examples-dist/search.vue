<template><section class="demo-search"><h1 class="demo-title">search</h1><example-block title="基础用法">
                <zan-search placeholder="商品名称" @search="goSearch"></zan-search>


              </example-block></section></template>

<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  methods: {
    goSearch(value) {
      alert(value)
    }
  }
};
</script>