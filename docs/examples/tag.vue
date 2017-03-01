<template>
  <div class="page-cell">
    <h1 class="page-title">Tag</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <div>
      <div class="tags-container">
        <zan-tag>返现</zan-tag>
        <zan-tag :plain="true">返现</zan-tag>
      </div>
      <div class="tags-container">
        <zan-tag type="danger">返现</zan-tag>
        <zan-tag type="danger">四字标签</zan-tag>
        <zan-tag type="danger">一</zan-tag>
      </div>
      <div class="tags-container">
        <zan-tag type="danger">返现</zan-tag>
        <zan-tag :plain="true" type="danger">返现</zan-tag>
      </div>
      <div class="tags-container">
        <zan-tag type="primary">返现</zan-tag>
        <zan-tag :plain="true" type="primary">返现</zan-tag>
      </div>
      <div class="tags-container">
        <zan-tag type="success">返现</zan-tag>
        <zan-tag :plain="true" type="success">返现</zan-tag>
      </div>
      <div class="tags-container">
        <zan-tag type="danger" :mark="true">返现</zan-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style>
.page-sub-title {
  padding: 25px 15px;
}
.tags-container {
  padding: 5px 15px;

  .zan-tag + .zan-tag {
    margin-left: 10px;
  }
}
</style>
