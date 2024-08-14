<script setup>
import VanCalendar from '..';
import { useTranslate } from '../../../docs/site';

const { switchMode } = defineProps({
  switchMode: String,
});

const t = useTranslate({
  'zh-CN': {
    calendar: '日历',
    tiledDisplay: '平铺展示',
  },
  'en-US': {
    calendar: 'Calendar',
    tiledDisplay: 'Tiled display',
  },
});
</script>

<template>
  <demo-block card :title="t('tiledDisplay')">
    <van-calendar
      :title="t('calendar')"
      :poppable="false"
      :show-confirm="false"
      :switch-mode="switchMode"
      :style="{ height: '500px' }"
    />
  </demo-block>
</template>
