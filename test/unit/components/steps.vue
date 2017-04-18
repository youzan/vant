<template>
  <zan-steps :active="active">
    <zan-step>买家下单</zan-step>
    <zan-step>商家接单</zan-step>
    <zan-step>买家提货</zan-step>
    <zan-step>交易完成</zan-step>
  </zan-steps>
</template>

<script>
import Steps from 'packages/steps';
import Step from 'packages/step';

export default {
  components: {
    'zan-step': Step,
    'zan-steps': Steps
  },

  data() {
    return {
      active: 1
    };
  }
};
</script>
