<template><section class="demo-imagePreview"><h1 class="demo-title">ImagePreview 图片预览</h1><example-block title="">
                <zan-button @click="handleImagePreview">预览图片</zan-button>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b image-preview {
    .zan-button {
      margin-left: 15px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
import { ImagePreview } from 'src/index';
import MobileComputed from 'components/mobile-computed';

export default {
  mixins: [MobileComputed],

  methods: {
    handleImagePreview() {
      ImagePreview([
        'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png',
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ]);
    }
  }
};
</script>