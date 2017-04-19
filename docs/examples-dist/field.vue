<template><section class="demo-field"><h1 class="demo-title">Field 输入框</h1><example-block title="基础用法">
                <van-cell-group>
  <van-field type="text" label="用户名：" placeholder="请输入用户名" v-model="username" required></van-field>
  <van-field type="password" label="密码：" placeholder="请输入密码" required></van-field>
  <van-field type="textarea" label="个人介绍：" placeholder="请输入个人介绍" required></van-field>
</van-cell-group>

              </example-block><example-block title="无label的输入框">
                <van-cell-group>
  <van-field type="text" placeholder="请输入用户名"></van-field>
</van-cell-group>

              </example-block><example-block title="带border的输入框">
                <div class="van-field-wrapper">
  <van-field type="text" placeholder="请输入用户名" border=""></van-field>
</div>

              </example-block><example-block title="禁用的输入框">
                <van-cell-group>
  <van-field label="用户名：" type="text" placeholder="请输入用户名" v-model="username" disabled></van-field>
</van-cell-group>

              </example-block><example-block title="错误的输入框">
                <van-cell-group>
  <van-field label="用户名：" type="text" placeholder="请输入用户名" error=""></van-field>
</van-cell-group>

              </example-block><example-block title="错误的输入框">
                <van-cell-group>
  <van-field label="留言：" type="textarea" placeholder="请输入留言" rows="1" autosize=""></van-field>
</van-cell-group>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b field {
    .van-field-wrapper {
      padding: 0 10px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  data() {
    return {
      username: 'zhangmin'
    };
  }
};
</script>