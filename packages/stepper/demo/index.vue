<template>
  <demo-section>
    <van-cell
      center
      :title="$t('basicUsage')"
    >
      <van-stepper v-model="stepper1" />
    </van-cell>

    <van-cell
      center
      :title="$t('step')"
    >
      <van-stepper
        v-model="stepper2"
        step="2"
      />
    </van-cell>

    <van-cell
      center
      :title="$t('range')"
    >
      <van-stepper
        v-model="stepper3"
        :min="5"
        :max="8"
      />
    </van-cell>

    <van-cell
      center
      :title="$t('integer')"
    >
      <van-stepper
        v-model="stepper4"
        integer
      />
    </van-cell>

    <van-cell
      center
      :title="$t('disabled')"
    >
      <van-stepper
        v-model="stepper5"
        disabled
      />
    </van-cell>

    <van-cell
      center
      :title="$t('asyncChange')"
    >
      <van-stepper
        :value="stepper6"
        async-change
        @change="onChange"
      />
    </van-cell>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      step: '步长设置',
      range: '限制输入范围',
      integer: '限制输入整数',
      asyncChange: '异步变更'
    },
    'en-US': {
      step: 'Step',
      range: 'Range',
      integer: 'Integer',
      asyncChange: 'Async Change',
    }
  },

  data() {
    return {
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1
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
        this.stepper6 = value;
      }, 500);
    }
  }
};
</script>

<style lang="less">
.demo-stepper {
  .van-stepper {
    margin-left: 15px;
  }
}
</style>
