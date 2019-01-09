<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-rate v-model="value1" />
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <van-rate
        v-model="value2"
        icon="like"
        void-icon="like-o"
      />
    </demo-block>

    <demo-block :title="$t('customStyle')">
      <van-rate
        v-model="value3"
        :size="25"
        :count="6"
        color="#07c160"
        void-color="#ceefe8"
      />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-rate
        v-model="value4"
        disabled
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      disabled: '禁用状态',
      customIcon: '自定义图标',
      customStyle: '自定义样式'
    },
    'en-US': {
      disabled: 'Disabled',
      customIcon: 'Custom Icon',
      customStyle: 'Custom Style'
    }
  },

  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 4,
      value4: 2
    };
  }
};
</script>

<style lang="less">
.demo-rate {
  .van-rate {
    margin-left: 15px;
  }
}
</style>
