<template><section class="demo-field"><h1 class="demo-title">field</h1><example-block title="基础用法">
                <zan-cell-group>
  <zan-field type="text" label="用户名：" placeholder="请输入用户名" v-model="username"></zan-field>
  <zan-field type="password" label="密码：" placeholder="请输入密码"></zan-field>
  <zan-field type="textarea" label="个人介绍：" placeholder="请输入个人介绍"></zan-field>
</zan-cell-group>

              </example-block><example-block title="无label的输入框">
                <zan-cell-group>
  <zan-field type="text" placeholder="请输入用户名"></zan-field>
</zan-cell-group>

              </example-block><example-block title="禁用的输入框">
                <zan-cell-group>
  <zan-field label="用户名：" type="text" placeholder="请输入用户名" v-model="username" disabled></zan-field>
</zan-cell-group>

              </example-block><example-block title="错误的输入框">
                <zan-cell-group>
  <zan-field label="用户名：" type="text" placeholder="请输入用户名" error=""></zan-field>
</zan-cell-group>

              </example-block></section></template>

<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  data() {
    return {
      username: 'zhangmin'
    };
  }
};
</script>