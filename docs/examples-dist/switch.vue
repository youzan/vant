<template><section class="demo-switch"><h1 class="demo-title">switch</h1><example-block title="基础用法">
                <div class="demo-switch__wrapper">
  <zan-switch class="some-customized-class" :checked="switchState" @change="updateState"></zan-switch>
  <div class="demo-switch__text">{{switchStateText}}</div>
</div>
<div class="demo-switch__wrapper">
  <zan-switch class="some-customized-class" :checked="true" :disabled="true"></zan-switch>
  <div class="demo-switch__text">ON, DISABLED</div>
</div>
<div class="demo-switch__wrapper">
  <zan-switch class="some-customized-class" :checked="false" :disabled="true"></zan-switch>
  <div class="demo-switch__text">OFF, DISABLED</div>
</div>
<div class="demo-switch__wrapper">
  <zan-switch class="some-customized-class" :checked="true" :loading="true"></zan-switch>
  <div class="demo-switch__text">ON, LOADING</div>
</div>
<div class="demo-switch__wrapper">
  <zan-switch class="some-customized-class" :checked="false" :loading="true"></zan-switch>
  <div class="demo-switch__text">OFF, LOADING</div>
</div>



              </example-block></section></template>
<style>
  @component-namespace demo {
    @b switch {
      padding: 0 15px 15px;

      @e wrapper {
        width: 33.33%;
        float: left;
        text-align: center;
      }

      @e text {
        margin: 20px 0;
      }
    }
  }
</style>
<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  data() {
    return {
      switchState: true
    };
  },
  computed: {
    switchStateText() {
      return this.switchState ? ' ON' : 'OFF';
    }
  },
  methods: {
    updateState(newState) {
      this.switchState = newState;
    }
  }
};  
</script>