<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-rate v-model="value1" />
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-rate
        v-model="value2"
        :size="25"
        :count="6"
        color="#2ba"
        void-color="#ceefe8"
      />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-rate disabled v-model="value3" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      disabled: '禁用状态',
      customColor: '自定义颜色'
    },
    'en-US': {
      disabled: 'Disabled',
      customColor: 'Custom Color'
    }
  },

  data() {
    return {
      value1: 3,
      value2: 4,
      value3: 2
    };
  }
};
</script>

<style lang="postcss">
.demo-rate {
  .van-rate {
    margin-left: 15px;
  }
}
</style>
