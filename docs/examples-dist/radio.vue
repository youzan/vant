<template><section class="demo-radio"><h1 class="demo-title">Radio 单选框</h1><example-block title="基础用法">
                <div class="zan-radios">
  <zan-radio name="1" v-model="radio1">单选框1</zan-radio>
  <zan-radio name="2" v-model="radio1">单选框2</zan-radio>
</div>



              </example-block><example-block title="禁用状态">
                <div class="zan-radios">
  <zan-radio name="1" v-model="radio2" disabled>未选中禁用</zan-radio>
  <zan-radio name="2" v-model="radio2" disabled>选中且禁用</zan-radio>
</div>



              </example-block><example-block title="radio组">
                <div class="zan-radios">
  <zan-radio-group v-model="radio3">
    <zan-radio name="1">单选框1</zan-radio>
    <zan-radio name="2">单选框2</zan-radio>
  </zan-radio-group>
</div>
  


              </example-block><example-block title="与Cell组件一起使用">
                <zan-radio-group v-model="radio4">
  <zan-cell-group>
    <zan-cell><zan-radio name="1">单选框1</zan-radio></zan-cell>
    <zan-cell><zan-radio name="2">单选框2</zan-radio></zan-cell>
  </zan-cell-group>
</zan-radio-group>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b radio {
    .zan-radios {
      padding: 0 20px;

      .zan-radio {
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