<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-slider :value="50" @change="handleChange"
        @after-change="handleAfterChange"></van-slider>
    </demo-block>
    <demo-block :title="$t('title2')">
      <van-slider :value="50" disabled></van-slider>
    </demo-block>
    <demo-block :title="$t('title3')">
      <van-slider :value="50"
        pivot-color="#333"
        loaded-bar-color="red"
        bar-color="blue"></van-slider>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '事件',
      title2: '禁用',
      title3: '自定义样式'
    },
    'en-US': {
      title1: 'Events',
      title2: 'Disabled',
      title3: 'Customized style'
    }
  },
  methods: {
    handleChange(value) {
      console.log('handleChange:', value)
    },
    handleAfterChange(value) {
      console.log('handleAfterChange:', value)
    }
  }
};
</script>
