<template>
  <div class="page-steps">
    <h1 class="page-title">Steps</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <zan-steps :active="active" icon="certificate" icon-class="steps-success" title="等待商家发货" description="等待商家发货等待商家发货等待商家发货等待商家发货等待商家发货">
      <zan-step>买家下单</zan-step>
      <zan-step>商家接单</zan-step>
      <zan-step>交易完成</zan-step>
    </zan-steps>
    <zan-button @click="nextStep">下一步</zan-button>

    <h2 class="page-sub-title">只显示步骤条</h2>
    <zan-steps :active="active">
      <zan-step>买家下单</zan-step>
      <zan-step>买家提货</zan-step>
      <zan-step>交易完成</zan-step>
    </zan-steps>
  </div>
</template>

<script>
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

<style>
.steps-success {
  color: #06bf04;
}

.page-steps {
  .page-sub-title {
    padding: 20px 15px;
  }

  .zan-button {
    margin-left: 15px;
  }
}
</style>
