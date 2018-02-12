<template>
  <van-tabs :active="active">
    <van-tab title="选项一">内容一</van-tab>
    <van-tab title="选项二">内容二</van-tab>
    <van-tab title="选项三">内容三</van-tab>
    <van-tab title="选项四">内容四</van-tab>
    <van-tab title="选项五">内容五</van-tab>
    <van-tab title="选项六">内容六</van-tab>
    <van-tab title="选项七">内容七</van-tab>
    <van-tab title="选项八">内容八</van-tab>
  </van-tabs>
</template>

<script>
import Tab from 'packages/tab';
import Tabs from 'packages/tabs';

export default {
  components: {
    'van-tab': Tab,
    'van-tabs': Tabs
  },

  props: {
    active: [String, Number]
  }
};
</script>
