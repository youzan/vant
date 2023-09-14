<script setup lang="ts">
import VanDrag from '..';
import VanButton from '../../button';
import VanTabs from '../../tabs';
import VanTab from '../../tab';
import { useTranslate } from '../../../docs/site';
import { ref, computed } from 'vue';

const t = useTranslate({
  'zh-CN': {
    base: '基础用法',
    freeMagnetic: '自由拖拽和磁吸',
    boundary: '限制边界范围',
  },
  'en-US': {
    base: 'base',
    freeMagnetic:
      'Allow x and y drags to attach to the nearest side of the x axis',
    boundary: 'limit boundary range',
  },
});

const activeName = ref(0);
const demoBoundaryRef = ref<HTMLDivElement>();

const top = computed(
  () => demoBoundaryRef.value?.getBoundingClientRect().top as number,
);

const right = computed(
  () => (demoBoundaryRef.value?.getBoundingClientRect().right as number) - 60,
);

const bottom = computed(
  () => (demoBoundaryRef.value?.getBoundingClientRect().bottom as number) - 44,
);
</script>

<template>
  <van-tabs v-model:active="activeName">
    <van-tab :title="t('basicUsage')">
      <van-drag>
        <van-button type="primary">按钮</van-button>
      </van-drag>
    </van-tab>
    <van-tab :title="t('freeMagnetic')">
      <van-drag magnetic="x">
        <van-button type="primary">按钮</van-button>
      </van-drag>
    </van-tab>
    <van-tab :title="t('boundary')">
      <div class="demo-boundary" ref="demoBoundaryRef"></div>
      <van-drag :boundary="{ top, left: 0, bottom, right }">
        <van-button type="primary">按钮</van-button>
      </van-drag>
    </van-tab>
  </van-tabs>
</template>

<style lang="less">
.demo-boundary {
  position: absolute;
  left: 0px;
  width: 300px;
  height: 200px;
  border: 1px solid red;
  box-sizing: border-box;
}
</style>
