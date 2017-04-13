<template><section class="demo-steps"><h1 class="demo-title">steps</h1><example-block title="基础用法">
                <zan-steps :active="active" icon="logistics" icon-class="steps-success" title="等待商家发货" description="等待商家发货等待商家发货等待商家发货等待商家发货等待商家发货">
  <zan-step>买家下单</zan-step>
  <zan-step>商家接单</zan-step>
  <zan-step>买家提货</zan-step>
  <zan-step>交易完成</zan-step>
</zan-steps>

<zan-button @click="nextStep">下一步</zan-button>



              </example-block><example-block title="只显示步骤条">
                <zan-steps :active="active">
  <zan-step>买家下单</zan-step>
  <zan-step>商家接单</zan-step>
  <zan-step>买家提货</zan-step>
  <zan-step>交易完成</zan-step>
</zan-steps>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b steps {
    .steps-success {
      color: #06bf04;
    }

    .zan-button {
      margin: 15px 0 0 15px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    nextStep() {
      if (++this.active > 3) this.active = 0;
    }
  }
}
</script>