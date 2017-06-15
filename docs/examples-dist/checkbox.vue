<template><section class="demo-checkbox"><h1 class="demo-title">Checkbox 复选框</h1><example-block title="基础用法">
                <div class="van-checkbox-wrapper">
  <van-checkbox v-model="checkbox1">复选框1</van-checkbox>
</div>



              </example-block><example-block title="禁用状态">
                <div class="van-checkbox-wrapper">
  <van-checkbox v-model="checkbox2" disabled>复选框2</van-checkbox>
</div>



              </example-block><example-block title="Checkbox组">
                <div class="van-checkbox-wrapper">
  <van-checkbox-group v-model="result">
    <van-checkbox v-for="(item, index) in list" :key="index" :name="item">复选框{{item}}</van-checkbox>
  </van-checkbox-group>
</div>



              </example-block><example-block title="禁用Checkbox组">
                <div class="van-checkbox-wrapper">
  <van-checkbox-group v-model="result" disabled>
    <van-checkbox v-for="(item, index) in list" :key="index" :name="item">复选框{{item}}</van-checkbox>
  </van-checkbox-group>
</div>



              </example-block><example-block title="与Cell组件一起使用">
                <van-checkbox-group v-model="result">
  <van-cell-group>
    <van-cell v-for="(item, index) in list" :key="index">
      <van-checkbox :name="item">复选框{{item}}</van-checkbox>
    </van-cell>
  </van-cell-group>
</van-checkbox-group>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b checkbox {
    .van-checkbox-wrapper {
      padding: 0 20px;

      .van-checkbox {
        margin: 10px 0;
      }
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
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