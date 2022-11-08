<script setup>
import VanBackTop from '..';
import VanCell from '../../cell';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    type1: '基础用法',
    type2: '设置监听目标',
  },
  'en-US': {
    type1: 'Basic Usage',
    type2: 'Target to be listened to',
  },
});

const list1 = [...Array(10).keys()];
const list2 = [...Array(30).keys()];
</script>

<template>
  <demo-block :title="t('type1')">
    <van-cell v-for="item in list1" :key="item" :title="item" />
    <van-back-top />
    <van-back-top bottom="100" right="30">
      <div class="custom" style="">回到顶部</div>
    </van-back-top>
  </demo-block>

  <demo-block :title="t('type2')">
    <div class="back-top--list">
      <van-cell v-for="item in list2" :key="item" :title="item" />
      <van-back-top target=".back-top--list" bottom="150" right="30" />
    </div>
  </demo-block>
</template>

<style lang="less">
.back-top--list {
  height: 400px;
  overflow: auto;
}
.custom {
  width: 200px;
  line-height: 40px;
  text-align: center;
}
</style>
