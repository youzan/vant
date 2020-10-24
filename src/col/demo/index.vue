<template>
  <demo-block :title="t('basicUsage')">
    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>

    <van-row>
      <van-col span="4">span: 4</van-col>
      <van-col span="10" offset="4">
        offset: 4, span: 10
      </van-col>
    </van-row>

    <van-row>
      <van-col offset="12" span="12">
        offset: 12, span: 12
      </van-col>
    </van-row>
  </demo-block>

  <demo-block :title="t('title2')">
    <van-row gutter="20">
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('justify')">
    <van-row justify="center">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>

    <van-row justify="end">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>

    <van-row justify="space-between">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>

    <van-row justify="space-around">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距',
      justify: '对齐方式',
    },
    'en-US': {
      title2: 'Column Spacing',
      justify: 'Justify Content',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-col {
  background: @white;

  .van-doc-demo-block {
    padding: 0 @padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .van-col {
    margin-bottom: 10px;
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
