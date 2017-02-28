<template>
  <div class="page-field">
    <h1 class="page-title">Field</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <zan-cell-group>
      <zan-field type="text" label="用户名：" placeholder="请输入用户名"></zan-field>
      <zan-field type="password" label="密码：" placeholder="请输入密码"></zan-field>
      <zan-field type="textarea" label="个人介绍：" placeholder="请输入个人介绍"></zan-field>
    </zan-cell-group>

    <h2 class="page-sub-title">无label的输入框</h2>
    <zan-cell-group>
      <zan-field type="text" placeholder="请输入用户名"></zan-field>
    </zan-cell-group>

    <h2 class="page-sub-title">监听change事件</h2>
    <zan-cell-group>
      <zan-field type="text" label="用户名：" placeholder="请输入用户名" @change="handleChange"></zan-field>
    </zan-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    };
  },

  methods: {
    handleChange() {
      console.log(this.name);
    }
  }
};
</script>

<style>
.page-sub-title {
  padding: 20px 15px;
}
</style>
