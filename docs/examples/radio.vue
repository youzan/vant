<template>
  <div class="page-switch">
    <h1 class="page-title">Radio</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <z-radio-group v-model="radio1">
      <z-radio name="1">单选框1</z-radio>
      <z-radio name="2">单选框2</z-radio>
    </z-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: '1'
    }
  },

  watch: {
    radio1(val) {
      console.log(val);
    }
  }
};
</script>
