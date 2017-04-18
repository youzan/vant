<template>
  <zan-tabs>
    <zan-tab title="选项一">内容一</zan-tab>
    <zan-tab title="选项二" disabled>内容二</zan-tab>
    <zan-tab title="选项三">内容三</zan-tab>
    <zan-tab title="选项四">内容四</zan-tab>
    <zan-tab title="选项五">内容五</zan-tab>
  </zan-tabs>
</template>

<script>
import Tab from 'packages/tab';
import Tabs from 'packages/tabs';

export default {
  components: {
    'zan-tab': Tab,
    'zan-tabs': Tabs
  }
};
</script>
