<template>
  <div class="page-radio">
    <h1 class="page-title">Radio</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <z-radio name="1" v-model="radio1">单选框1</z-radio>
    <z-radio name="2" v-model="radio1">单选框2</z-radio>

    <h2 class="page-sub-title">禁用状态</h2>
    <z-radio name="1" v-model="radio2" disabled>未选中禁用</z-radio>
    <z-radio name="2" v-model="radio2" disabled>选中且禁用</z-radio>

    <h2 class="page-sub-title">radio组</h2>
    <z-radio-group v-model="radio3">
      <z-radio name="1">单选框1</z-radio>
      <z-radio name="2">单选框2</z-radio>
    </z-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1'
    }
  }
};
</script>

<style>
.page-radio {
  padding: 0 15px;
}
</style>
