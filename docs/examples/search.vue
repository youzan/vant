<script>
export default {
  methods: {
    goSearch(value) {
      alert(value)
    }
  }
};
</script>
<template>
  <div class="page-search">
    <h1 class="page-title">Search</h1>
    
    <h2 class="page-sub-title">基础用法</h2>
    <zan-search  placeholder="商品名称" @search="goSearch">
    </zan-search>
  </div>
</template>
<style>
  .page-badge {
    padding: 0 15px;
  }
</style>