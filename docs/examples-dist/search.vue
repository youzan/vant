<template><section class="demo-search"><h1 class="demo-title">Search 搜索</h1><example-block title="基础用法">
                <van-search placeholder="商品名称" @search="goSearch"></van-search>



              </example-block><example-block title="基础用法">
                <van-search placeholder="搜索商品" type="showcase"></van-search>

              </example-block><example-block title="监听对应事件">
                <van-search placeholder="商品名称" @search="goSearch" @change="handleChange" @cancel="handleCancel"></van-search>



              </example-block></section></template>

<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  methods: {
    goSearch(value) {
      alert(value)
    },
    handleChange(value) {
      console.log(value);
    },
    handleCancel() {
      alert('cancel');
    }
  }
};
</script>