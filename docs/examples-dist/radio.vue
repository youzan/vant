<template><section class="demo-radio"><h1 class="demo-title">Radio 单选框</h1><example-block title="基础用法">
                <div class="van-radios">
  <van-radio name="1" v-model="radio1">单选框1</van-radio>
  <van-radio name="2" v-model="radio1">单选框2</van-radio>
</div>



              </example-block><example-block title="禁用状态">
                <div class="van-radios">
  <van-radio name="1" v-model="radio2" disabled>未选中禁用</van-radio>
  <van-radio name="2" v-model="radio2" disabled>选中且禁用</van-radio>
</div>



              </example-block><example-block title="radio组">
                <div class="van-radios">
  <van-radio-group v-model="radio3">
    <van-radio name="1">单选框1</van-radio>
    <van-radio name="2">单选框2</van-radio>
  </van-radio-group>
</div>
  


              </example-block><example-block title="与Cell组件一起使用">
                <van-radio-group v-model="radio4">
  <van-cell-group>
    <van-cell><van-radio name="1">单选框1</van-radio></van-cell>
    <van-cell><van-radio name="2">单选框2</van-radio></van-cell>
  </van-cell-group>
</van-radio-group>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b radio {
    .van-radios {
      padding: 0 20px;

      .van-radio {
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
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1'
    };
  }
};
</script>