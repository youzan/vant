<script setup lang="ts">
import { ref } from 'vue';
import VanBackTop from '..';
import VanTabs from '../../tabs';
import VanTab from '../../tab';
import VanCell from '../../cell';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    type1: '基础用法',
    type2: '自定义内容',
    type3: '设置监听目标',
  },
  'en-US': {
    type1: 'Basic Usage',
    type2: 'Customizations',
    type3: 'Target',
  },
});

const list = [...Array(50).keys()];
const targetEl = ref<HTMLElement>();
</script>

<template>
  <van-tabs>
    <van-tab :title="t('type1')">
      <van-cell v-for="item in list" :key="item" :title="item" />
      <van-back-top />
    </van-tab>

    <van-tab :title="t('type2')">
      <van-cell v-for="item in list" :key="item" :title="item" />
      <van-back-top bottom="100" right="30">
        <div class="custom" style="">{{ t('type2') }}</div>
      </van-back-top>
    </van-tab>

    <van-tab :title="t('type3')">
      <div class="back-top--test" ref="targetEl">
        <van-cell v-for="item in list" :key="item" :title="item" />
        <van-back-top :target="targetEl" bottom="150" right="30" />
      </div>
    </van-tab>
  </van-tabs>
</template>

<style lang="less">
.back-top--test {
  height: 400px;
  overflow: auto;
}
.custom {
  width: 200px;
  line-height: 40px;
  text-align: center;
}
</style>
