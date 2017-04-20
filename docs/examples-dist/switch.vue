<template><section class="demo-switch"><h1 class="demo-title">Switch 开关</h1><example-block title="基础用法">
                <van-row>
  <van-col span="12">
    <van-switch class="some-customized-class" v-model="switchState1"></van-switch>
    <div class="demo-switch__text">{{ switchState1 ? ' 打开' : '关闭' }}</div>
  </van-col>
  <van-col span="12">
    <van-switch class="some-customized-class" v-model="switchState2" :on-change="updateState"></van-switch>
    <div class="demo-switch__text">{{ switchState2 ? ' 打开' : '关闭' }}</div>
  </van-col>
</van-row>





              </example-block><example-block title="禁用状态">
                <van-switch class="some-customized-class" v-model="switchStateTrue" :disabled="true"></van-switch>
<div class="demo-switch__text">ON, DISABLED</div>

<van-switch class="some-customized-class" v-model="switchStateFalse" :disabled="true"></van-switch>
<div class="demo-switch__text">OFF, DISABLED</div>



              </example-block><example-block title="loading状态">
                <van-switch class="some-customized-class" v-model="switchStateTrue" :loading="true"></van-switch>
<div class="demo-switch__text">ON, LOADING</div>

<van-switch class="some-customized-class" v-model="switchStateFalse" :loading="true"></van-switch>
<div class="demo-switch__text">OFF, LOADING</div>



              </example-block></section></template>
<style>
  @component-namespace demo {
    @b switch {
      @e text {
        display: inline-block;
        line-height: 32px;
      }
    }
  }
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
import Dialog from 'packages/dialog';

export default {
  data() {
    return {
      switchState1: true,
      switchState2: true,
      switchStateTrue: true,
      switchStateFalse: false
    };
  },
  methods: {
    updateState(newState) {
      const state = newState ? '打开' : '关闭';
      Dialog.confirm({
        title: '提醒',
        message: '是否' + state + '开关？'
      }).then((action) => {
        this.switchState2 = newState;
      }, (error) => {});
    }
  }
};  
</script>