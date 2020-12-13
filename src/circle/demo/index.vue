<template>
  <demo-block :title="t('basicUsage')">
    <van-circle
      v-model:current-rate="currentRate1"
      :rate="rate"
      :speed="100"
      :text="currentRate1.toFixed(0) + '%'"
    />
  </demo-block>

  <demo-block :title="t('customStyle')">
    <van-circle
      v-model:current-rate="currentRate3"
      :rate="rate"
      :speed="100"
      :stroke-width="60"
      :text="t('customWidth')"
    />

    <van-circle
      v-model:current-rate="currentRate3"
      color="#ee0a24"
      :rate="rate"
      layer-color="#ebedf0"
      :speed="100"
      :text="t('customColor')"
    />

    <van-circle
      v-model:current-rate="currentRate2"
      :rate="rate"
      :speed="100"
      :color="gradientColor"
      :text="t('gradient')"
    />

    <van-circle
      v-model:current-rate="currentRate4"
      color="#07c160"
      :rate="rate"
      :speed="100"
      :clockwise="false"
      :text="t('counterClockwise')"
      style="margin-top: 15px"
    />

    <van-circle
      v-model:current-rate="currentRate4"
      color="#7232dd"
      :rate="rate"
      :speed="100"
      size="120px"
      :clockwise="false"
      :text="t('customSize')"
      style="margin-top: 15px"
    />
  </demo-block>

  <div style="margin-top: 15px">
    <van-button :text="t('add')" type="primary" size="small" @click="add" />
    <van-button
      :text="t('decrease')"
      type="danger"
      size="small"
      @click="reduce"
    />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

const i18n = {
  'zh-CN': {
    gradient: '渐变色',
    customSize: '大小定制',
    customStyle: '样式定制',
    customColor: '颜色定制',
    customWidth: '宽度定制',
    counterClockwise: '逆时针',
  },
  'en-US': {
    gradient: 'Gradient',
    customSize: 'Custom Size',
    customStyle: 'Custom Style',
    customColor: 'Custom Color',
    customWidth: 'Custom Width',
    counterClockwise: 'Counter Clockwise',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      rate: 70,
      currentRate1: 70,
      currentRate2: 70,
      currentRate3: 70,
      currentRate4: 70,
    });

    const gradientColor = {
      '0%': '#3fecff',
      '100%': '#6149f6',
    };

    const add = () => {
      state.rate = format(state.rate + 20);
    };

    const reduce = () => {
      state.rate = format(state.rate - 20);
    };

    return {
      ...toRefs(state),
      t,
      add,
      reduce,
      gradientColor,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-circle {
  .van-circle {
    margin-left: @padding-md;
  }

  .van-button {
    margin: @padding-md 0 0 10px;

    &:first-of-type {
      margin-left: @padding-md;
    }
  }
}
</style>
