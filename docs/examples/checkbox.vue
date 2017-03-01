<template>
  <div class="page-checkbox">
    <h1 class="page-title">Checkbox</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <zan-checkbox v-model="checkbox1">复选框1</zan-checkbox>

    <h2 class="page-sub-title">禁用状态</h2>
    <zan-checkbox v-model="checkbox2" disabled>复选框2</zan-checkbox>

    <h2 class="page-sub-title">Checkbox组</h2>
    <zan-checkbox-group v-model="result">
      <zan-checkbox v-for="item in list" :name="item">复选框{{item}}</zan-checkbox>
    </zan-checkbox-group>

    <h2 class="page-sub-title">禁用Checkbox组</h2>
    <zan-checkbox-group v-model="result" disabled>
      <zan-checkbox v-for="item in list" :name="item">复选框{{item}}</zan-checkbox>
    </zan-checkbox-group>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b']
    };
  },

  watch: {
    result(val) {
      console.log(val);
    }
  }
};
</script>
