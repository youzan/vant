<template>
  <div class="page-image-pewview">
    <h1 class="page-title">Image Preview</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <zan-image-preview v-model="preview"></zan-image-preview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preview: true
    };
  }
};
</script>
