<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-stepper v-model="stepper1" />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-stepper
        v-model="stepper1"
        disabled
      />
    </demo-block>

    <demo-block :title="$t('asyncChange')">
      <van-stepper
        :value="stepper2"
        integer
        async-change
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-stepper
        v-model="stepper3"
        integer
        :min="5"
        :max="40"
        :step="2"
        :default-value="9"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      asyncChange: '异步变更'
    },
    'en-US': {
      asyncChange: 'Async Change',
    }
  },

  data() {
    return {
      stepper1: 1,
      stepper2: 10,
      stepper3: null
    };
  },

  methods: {
    onChange(value) {
      if (this.changing) {
        return;
      }

      this.changing = true;
      setTimeout(() => {
        this.changing = false;
        this.stepper2 = value;
      }, 500);
    }
  }
};
</script>

<style lang="less">
.demo-stepper {
  background-color: #fff;

  .van-stepper {
    margin-left: 15px;
  }
}
</style>
