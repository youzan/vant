<template>
  <div :class="$style.empty" class="empty" s-empty="true">+</div>
</template>

<script>
export default {
  name: 'VanEmptyCol'
};
</script>

<style module>
.empty {
  background: #f7f8fa;
  border: 1px dashed #c3c3c3;
  text-align: center;
  color: #999;
  min-height: 32px;
  min-width: 32px;
  width: 100%;
  align-items: center;
  display: inline-flex;
  justify-content: center;
}
</style>
<style scoped>
.empty {
  background: #f7f8fa;
  border: 1px dashed #c3c3c3;
  text-align: center;
  color: #999;
  min-height: 32px;
  min-width: 90px;
  width: 100%;
  align-items: center;
  display: inline-flex;
  justify-content: center;
}
</style>
