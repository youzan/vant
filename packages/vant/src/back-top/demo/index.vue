<script setup lang="ts">
import { ref } from 'vue';
import VanBackTop from '..';
import VanTabs from '../../tabs';
import VanTab from '../../tab';
import VanCell from '../../cell';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    backTop: '返回顶部',
    customContent: '自定义内容',
    customPosition: '自定义位置',
    immediateScroll: '瞬间滚动',
    setScrollTarget: '设置滚动目标',
  },
  'en-US': {
    backTop: 'Back Top',
    customContent: 'Custom Content',
    customPosition: 'Custom Position',
    immediateScroll: 'Immediate Scroll',
    setScrollTarget: 'Set Scroll Target',
  },
});

const activeTab = ref(0);
const list = [...Array(50).keys()];
const targetEl = ref<HTMLElement>();
</script>

<template>
  <van-tabs v-model:active="activeTab" :ellipsis="false">
    <van-tab :title="t('basicUsage')">
      <van-cell v-for="item in list" :key="item" :title="item" />
      <van-back-top v-if="activeTab === 0" />
    </van-tab>

    <van-tab :title="t('customPosition')">
      <van-cell v-for="item in list" :key="item" :title="item" />
      <van-back-top v-if="activeTab === 1" right="15vw" bottom="10vh" />
    </van-tab>

    <van-tab :title="t('customContent')">
      <van-cell v-for="item in list" :key="item" :title="item" />
      <van-back-top v-if="activeTab === 2" class="custom-back-top">
        {{ t('backTop') }}
      </van-back-top>
    </van-tab>

    <van-tab :title="t('setScrollTarget')">
      <div class="back-top-wrapper" ref="targetEl">
        <van-cell v-for="item in list" :key="item" :title="item" />
        <van-back-top v-if="activeTab === 3" :target="targetEl" bottom="30vh" />
      </div>
    </van-tab>

    <van-tab :title="t('immediateScroll')">
      <van-cell v-for="item in list" :key="item" :title="item" />
      <van-back-top v-if="activeTab === 4" immediate />
    </van-tab>
  </van-tabs>
</template>

<style lang="less">
.back-top-wrapper {
  height: 60vh;
  overflow: auto;
}

.custom-back-top {
  width: 80px;
  font-size: 14px;
  text-align: center;
}
</style>
