<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-slider :value="50" @change="handleChange"
        @afterChange="handleAfterChange"></van-slider>
    </demo-block>
    <demo-block :title="$t('title2')">
      <van-slider :value="50" disabled></van-slider>
    </demo-block>
    <demo-block :title="$t('title3')">
      <van-slider :value="50"
        pivotColor="#333"
        loadedBarColor="red"
        barColor="blue"></van-slider>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '基础使用',
      title2: '禁用',
      title3: '自定义样式'
    },
    'en-US': {
      title1: 'Slider',
      title2: 'Disabled',
      title3: 'Slider with customized style'
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
