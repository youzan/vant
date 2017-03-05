<template>
  <div class="page-image-pewview">
    <h1 class="page-title">Image Preview</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <zan-button @click="previewImage">click me</zan-button>
    <zan-button @click="previewImage2">click me</zan-button>
  </div>
</template>

<script>
import { ImagePreview } from 'src/index';

export default {
  data() {
    return {
      preview: true
    };
  },

  methods: {
    previewImage() {
      ImagePreview('https://img.yzcdn.cn/upload_files/2017/03/03/FjVBWm29JBob2gj9RC86MOD38RNf.jpg');
    },
    previewImage2() {
      ImagePreview('https://img.yzcdn.cn/upload_files/2017/03/03/FseigsLj7DceULRKWhXsIsrkq1vT.jpg');
    }
  }
};
</script>
