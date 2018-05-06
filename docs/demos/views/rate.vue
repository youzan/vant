<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-rate v-model="valueA" />
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-rate
        v-model="valueB"
        :size="25"
        :todal="6"
        :color="'#2ba'"
        :default-color="'#ceefe8'"
      />
    </demo-block>

     <demo-block :title="$t('disabled')">
      <van-rate disabled v-model="valueC" />
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
      valueA: 3,
      valueB: 4,
      valueC: 2
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
