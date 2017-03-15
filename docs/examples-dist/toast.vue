<template><section class="demo-toast"><h1 class="demo-title">toast</h1><example-block title="基础用法">
                <zan-button @click="showSimpleToast()">普通文字提示</zan-button>

<zan-button @click="showToast('loading')">加载Toast</zan-button>
<zan-button @click="showToast('success')">成功</zan-button>
<zan-button @click="showToast('failure')">失败</zan-button>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b toast {
    .zan-button {
      margin: 15px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
import { Toast } from 'src/index';

export default {
  methods: {
    showSimpleToast() {
      Toast('我是提示文案，建议不超过十五字~');
    },
    showToast(type) {
      Toast({
        type: type,
        message: '文案信息'
      })
    }
  }
};
</script>