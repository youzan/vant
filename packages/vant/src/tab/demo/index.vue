<script setup lang="ts">
import VanTabs from '../../tabs';
import VanTab from '..';
import VanImage from '../../image';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    tab: '标签 ',
    title2: '标签栏滚动',
    title3: '禁用标签',
    title4: '样式风格',
    title5: '点击事件',
    title6: '粘性布局',
    title7: '自定义标签',
    title8: '切换动画',
    title9: '滑动切换',
    title10: '滚动导航',
    disabled: ' 已被禁用',
    matchByName: '通过名称匹配',
    beforeChange: '异步切换',
  },
  'en-US': {
    tab: 'Tab ',
    content: 'content of tab',
    title2: 'Swipe Tabs',
    title3: 'Disabled Tab',
    title4: 'Card Style',
    title5: 'Click Event',
    title6: 'Sticky',
    title7: 'Custom Tab',
    title8: 'Switch Animation',
    title9: 'Swipeable',
    title10: 'Scrollspy',
    disabled: ' is disabled',
    matchByName: 'Match By Name',
    beforeChange: 'Before Change',
  },
});

const active6 = ref(0);
const showImg = ref(false);

setTimeout(() => {
  showImg.value = true
}, 300);

const tabs = [1, 2, 3, 4];
</script>

<template>
  <img
    v-show="showImg"
    src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/10/00/a1000055/img/basic/a1000055_main.jpg?20210222182701&q=80"
  />
  <van-tabs
    v-model:active="active6"
    :lazy-render="false"
    :ellipsis="false"
    sticky
  >
    <van-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
      {{ t('content') }} {{ index }}
    </van-tab>
  </van-tabs>
</template>
