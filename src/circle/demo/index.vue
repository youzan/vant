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
  </demo-section>
</template>

<script>
const format = rate => Math.min(Math.max(rate, 0), 100);

export default {
  i18n: {
    'zh-CN': {
      title2: '样式定制'
    },
    'en-US': {
      title2: 'Custom Style'
    }
  },

  data() {
    return {
      rate: 30,
      currentRate1: 0,
      currentRate2: 0
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
.demo-circle {
  .van-circle {
    margin-left: 15px;
  }

  .van-button {
    margin: 15px 0 0 10px;

    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>
