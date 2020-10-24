<template>
  <demo-block :title="t('type')">
    <van-loading />
    <van-loading type="spinner" />
  </demo-block>

  <demo-block :title="t('color')">
    <van-loading color="#1989fa" />
    <van-loading type="spinner" color="#1989fa" />
  </demo-block>

  <demo-block :title="t('size')">
    <van-loading size="24" />
    <van-loading type="spinner" size="24" />
  </demo-block>

  <demo-block :title="t('text')">
    <van-loading size="24px">
      {{ t('loading') }}
    </van-loading>
  </demo-block>

  <demo-block :title="t('vertical')">
    <van-loading size="24px" vertical>
      {{ t('loading') }}
    </van-loading>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '加载类型',
      text: '加载文案',
      size: '自定义大小',
      color: '自定义颜色',
      vertical: '垂直排列',
    },
    'en-US': {
      type: 'Type',
      text: 'Text',
      size: 'Size',
      color: 'Color',
      vertical: 'Vertical',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-loading {
  background: @white;

  .van-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
