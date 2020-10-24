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
      style="margin-top: 15px;"
    />

    <van-circle
      v-model:current-rate="currentRate4"
      color="#7232dd"
      :rate="rate"
      :speed="100"
      size="120px"
      :clockwise="false"
      :text="t('customSize')"
      style="margin-top: 15px;"
    />
  </demo-block>

  <div style="margin-top: 15px;">
    <van-button :text="t('add')" type="primary" size="small" @click="add" />
    <van-button
      :text="t('decrease')"
      type="danger"
      size="small"
      @click="reduce"
    />
  </div>
</template>

<script>
const format = (rate) => Math.min(Math.max(rate, 0), 100);

export default {
  i18n: {
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
  },

  data() {
    return {
      rate: 70,
      currentRate1: 70,
      currentRate2: 70,
      currentRate3: 70,
      currentRate4: 70,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6',
      },
    };
  },

  methods: {
    add() {
      this.rate = format(this.rate + 20);
    },

    reduce() {
      this.rate = format(this.rate - 20);
    },
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
