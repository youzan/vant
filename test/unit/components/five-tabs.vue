<template>
  <van-tabs>
    <van-tab title="选项一">内容一</van-tab>
    <van-tab title="选项二">内容二</van-tab>
    <van-tab title="选项三">内容三</van-tab>
    <van-tab title="选项四">内容四</van-tab>
  </van-tabs>
</template>

<script>
import Tab from 'packages/tab';
import Tabs from 'packages/tabs';

export default {
  components: {
    'van-tab': Tab,
    'van-tabs': Tabs
  }
};
</script>
