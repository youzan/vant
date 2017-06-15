<template><section class="demo-uploader"><h1 class="demo-title">Uploader 图片上传</h1><example-block title="基础用法">
                <div class="uploader-container">
  <van-uploader :after-read="logContent">
    <van-icon name="photograph"></van-icon>
  </van-uploader>
</div>



              </example-block></section></template>
<style>
.uploader-container {
  padding: 5px 15px;
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  methods: {
    logContent(file) {
      console.log(file)
    }
  }
};  
</script>