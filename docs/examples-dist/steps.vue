<template><section class="demo-steps"><h1 class="demo-title">Steps 步骤条</h1><example-block title="基础用法">
                <van-steps :active="active" icon="logistics" icon-class="steps-success" title="等待商家发货" description="等待商家发货等待商家发货等待商家发货等待商家发货等待商家发货">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>

<van-button @click="nextStep">下一步</van-button>



              </example-block><example-block title="只显示步骤条">
                <van-steps :active="active">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>

              </example-block><example-block title="高级用法">
                <van-steps :active="active" title="等待商家发货">
  <van-icon slot="icon" name="like"></van-icon>
  <p slot="message-extra">流程</p>
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>  
</van-steps>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b steps {
    .steps-success {
      color: #06bf04;
    }

    .van-button {
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