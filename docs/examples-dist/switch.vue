<template><section class="demo-switch"><h1 class="demo-title">Switch 开关</h1><example-block title="基础用法">
                <zan-switch class="some-customized-class" v-model="switchState1"></zan-switch>
<div class="demo-switch__text">{{ switchState1 ? ' ON' : 'OFF' }}</div>




              </example-block><example-block title="基础用法">
                <zan-switch class="some-customized-class" v-model="switchState2" :on-change="updateState"></zan-switch>
<div class="demo-switch__text">{{ switchState2 ? ' ON' : 'OFF' }}</div>




              </example-block><example-block title="">
                <zan-switch class="some-customized-class" v-model="switchStateTrue" :disabled="true"></zan-switch>
<div class="demo-switch__text">ON, DISABLED</div>

<zan-switch class="some-customized-class" v-model="switchStateFalse" :disabled="true"></zan-switch>
<div class="demo-switch__text">OFF, DISABLED</div>



              </example-block><example-block title="">
                <zan-switch class="some-customized-class" v-model="switchStateTrue" :loading="true"></zan-switch>
<div class="demo-switch__text">ON, LOADING</div>

<zan-switch class="some-customized-class" v-model="switchStateFalse" :loading="true"></zan-switch>
<div class="demo-switch__text">OFF, LOADING</div>



              </example-block></section></template>
<style>
  @component-namespace demo {
    @b switch {
      .examples {
        text-align: center;
      }

      @e text {
        margin: 20px auto;
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