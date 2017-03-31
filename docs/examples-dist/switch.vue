<template><section class="demo-switch"><h1 class="demo-title">switch</h1><example-block title="基础用法">
                <zan-switch class="some-customized-class" :checked="switchState" @change="updateState"></zan-switch>
<div class="demo-switch__text">{{ this.switchState ? ' ON' : 'OFF' }}</div>




              </example-block><example-block title="">
                <zan-switch class="some-customized-class" :checked="true" :disabled="true"></zan-switch>
<div class="demo-switch__text">ON, DISABLED</div>

<zan-switch class="some-customized-class" :checked="false" :disabled="true"></zan-switch>
<div class="demo-switch__text">OFF, DISABLED</div>

              </example-block><example-block title="">
                <zan-switch class="some-customized-class" :checked="true" :loading="true"></zan-switch>
<div class="demo-switch__text">ON, LOADING</div>

<zan-switch class="some-customized-class" :checked="false" :loading="true"></zan-switch>
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
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  data() {
    return {
      switchState: true
    };
  },
  methods: {
    updateState(newState) {
      this.switchState = newState;
    }
  }
};  
</script>