<template><section class="demo-uploader"><h1 class="demo-title">uploader</h1><example-block title="基础用法">
                <div class="uploader-container">
    <zan-uploader :before-read="logContent" @file-readed="logContent">
    </zan-uploader>
</div>

              </example-block><example-block title="自定义上传图标">
                <div class="uploader-container">
  <zan-uploader @file-readed="logContent">
    <zan-icon name="camera"></zan-icon>
  </zan-uploader>
</div>

              </example-block></section></template>
<style>
.uploader-container {
  padding: 5px 15px;
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  methods: {
    logContent(file) {
      console.log(file)
    }
  }
};  
</script>