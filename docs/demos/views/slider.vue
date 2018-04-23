<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-slider v-model="value1" @change="onChange" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-slider
        v-model="value2"
        :min="10"
        :max="90"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-slider v-model="value3" disabled />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '基本用法',
      title2: '指定选择范围',
      title3: '禁用',
      text: '当前值：'
    },
    'en-US': {
      title1: 'Basic Usage',
      title2: 'Range',
      title3: 'Disabled',
      text: 'Current value: '
    }
  },

  data() {
    return {
      value1: 50,
      value2: 50,
      value3: 50
    };
  },

  methods: {
    onChange(value) {
      this.$toast(this.$t('text') + value);
    }
  }
};
</script>

<style lang="postcss">
.demo-slider {
  user-select: none;

  .van-slider {
    margin: 0 15px 30px;
  }
}
</style>
