<template>
  <van-steps :active="active">
    <van-step>买家下单</van-step>
    <van-step>商家接单</van-step>
    <van-step>买家提货</van-step>
    <van-step>交易完成</van-step>
  </van-steps>
</template>

<script>
import Steps from 'packages/steps';
import Step from 'packages/step';

export default {
  components: {
    'van-step': Step,
    'van-steps': Steps
  },

  data() {
    return {
      active: 1
    };
  }
};
</script>
