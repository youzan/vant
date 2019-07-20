<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-circle
        v-model="currentRate1"
        :rate="rate"
        :speed="100"
        size="120px"
        :text="currentRate1.toFixed(0) + '%'"
      />
      <div>
        <van-button
          :text="$t('add')"
          type="primary"
          size="small"
          @click="add"
        />
        <van-button
          :text="$t('decrease')"
          type="danger"
          size="small"
          @click="reduce"
        />
      </div>
    </demo-block>

    <demo-block :title="$t('customStyle')">
      <van-circle
        v-model="currentRate2"
        color="#07c160"
        fill="#fff"
        :rate="rate"
        size="120px"
        layer-color="#ebedf0"
        :speed="100"
        :stroke-width="60"
        :clockwise="false"
        :text="currentRate2.toFixed(0) + '%'"
      />
    </demo-block>
  </demo-section>
</template>

<script>
const format = rate => Math.min(Math.max(rate, 0), 100);

export default {
  i18n: {
    'zh-CN': {
      customStyle: '样式定制'
    },
    'en-US': {
      customStyle: 'Custom Style'
    }
  },

  data() {
    return {
      rate: 30,
      currentRate1: 30,
      currentRate2: 30
    };
  },

  methods: {
    add() {
      this.rate = format(this.rate + 20);
    },

    reduce() {
      this.rate = format(this.rate - 20);
    }
  }
};
</script>

<style lang="less">
@import "../../style/var";

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
