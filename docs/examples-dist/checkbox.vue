<template><section class="demo-checkbox"><h1 class="demo-title">checkbox</h1><example-block title="基础用法">
                <div class="zan-checkbox-wrapper">
  <zan-checkbox v-model="checkbox1">复选框1</zan-checkbox>
</div>



              </example-block><example-block title="禁用状态">
                <div class="zan-checkbox-wrapper">
  <zan-checkbox v-model="checkbox2">复选框2</zan-checkbox>
</div>



              </example-block><example-block title="Checkbox组">
                <div class="zan-checkbox-wrapper">
  <zan-checkbox-group v-model="result">
    <zan-checkbox v-for="item in list" :name="item">复选框{{item}}</zan-checkbox>
  </zan-checkbox-group>
</div>



              </example-block><example-block title="禁用Checkbox组">
                <div class="zan-checkbox-wrapper">
  <zan-checkbox-group v-model="result" disabled>
    <zan-checkbox v-for="item in list" :name="item">复选框{{item}}</zan-checkbox>
  </zan-checkbox-group>
</div>



              </example-block><example-block title="与Cell组件一起使用">
                <zan-checkbox-group v-model="result">
  <zan-cell-group>
    <zan-cell v-for="item in list">
      <zan-checkbox :name="item">复选框{{item}}</zan-checkbox>
    </zan-cell>
  </zan-cell-group>
</zan-checkbox-group>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b checkbox {
    .zan-checkbox-wrapper {
      padding: 0 20px;

      .zan-checkbox {
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