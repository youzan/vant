<script setup lang="ts">
import { useTranslate } from '@demo/use-translate';
import { reactive } from '@vue/reactivity';

const i18n = {
  'zh-CN': {
    title2: '置灰',
    title3: '样式定制',
    strokeWidth: '线条粗细',
    transition: '过渡效果',
    increase: '增加',
    decrease: '减少',
  },
  'en-US': {
    title2: 'Inactive',
    title3: 'Custom Style',
    strokeWidth: 'Stroke Width',
    transition: 'Transition Effect',
    increase: 'increase',
    decrease: 'decrease',
  },
};

const t = useTranslate(i18n);

const state = reactive({
  percentage: 0,
});

const increment = 10;
const increase = () => {
  if (state.percentage >= 100 - increment) {
    state.percentage = 100;
  } else {
    state.percentage += increment;
  }
};
const decrease = () => {
  if (state.percentage <= increment) {
    state.percentage = 0;
  } else {
    state.percentage -= increment;
  }
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-progress :percentage="50" />
  </demo-block>

  <demo-block :title="t('strokeWidth')">
    <van-progress :percentage="50" stroke-width="8" />
  </demo-block>

  <demo-block :title="t('title2')">
    <van-progress inactive :percentage="50" />
  </demo-block>

  <demo-block :title="t('title3')">
    <van-progress color="#f2826a" :percentage="25" :pivot-text="t('orange')" />
    <van-progress color="#ee0a24" :percentage="50" :pivot-text="t('red')" />
    <van-progress
      :percentage="75"
      :pivot-text="t('purple')"
      pivot-color="#7232dd"
      color="linear-gradient(to right, #be99ff, #7232dd)"
    />
  </demo-block>

  <demo-block :title="t('transition')">
    <van-progress inactive :percentage="state.percentage" />
    <div style="display: flex; justify-content: space-around">
      <van-button @click="decrease">{{ t('decrease') }}</van-button>
      <van-button @click="increase">{{ t('increase') }}</van-button>
    </div>
  </demo-block>
</template>

<style lang="less">
.demo-progress {
  background: var(--van-white);

  .van-progress {
    margin: 20px;

    &:first-of-type {
      margin-top: 5px;
    }
  }
}
</style>
