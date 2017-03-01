<template>
  <div class="page-radio">
    <h1 class="page-title">Radio</h1>

    <div class="demo-wrapper">
      <h2 class="page-sub-title">基础用法</h2>
      <zan-radio name="1" v-model="radio1">单选框1</zan-radio>
      <zan-radio name="2" v-model="radio1">单选框2</zan-radio>

      <h2 class="page-sub-title">禁用状态</h2>
      <zan-radio name="1" v-model="radio2" disabled>未选中禁用</zan-radio>
      <zan-radio name="2" v-model="radio2" disabled>选中且禁用</zan-radio>

      <h2 class="page-sub-title">radio组</h2>
      <zan-radio-group v-model="radio3">
        <zan-radio name="1">单选框1</zan-radio>
        <zan-radio name="2">单选框2</zan-radio>
      </zan-radio-group>

      <h2 class="page-sub-title">禁用radio组</h2>
      <zan-radio-group v-model="radio3" disabled>
        <zan-radio name="1">单选框1</zan-radio>
        <zan-radio name="2">单选框2</zan-radio>
      </zan-radio-group>

      <h2 class="page-sub-title">与Cell组件一起使用</h2>
    </div>

    <zan-radio-group v-model="radio4">
      <zan-cell-group>
        <zan-cell><zan-radio name="1">单选框1</zan-radio></zan-cell>
        <zan-cell><zan-radio name="2">单选框2</zan-radio></zan-cell>
      </zan-cell-group>
    </zan-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1'
    };
  }
};
</script>

<style>
.demo-wrapper {
  padding: 0 15px;

  .zan-radio {
    margin: 10px 0;
  }
}
</style>
