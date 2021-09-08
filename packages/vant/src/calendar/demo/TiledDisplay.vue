<script setup>
import VanCalendar from '..';
import { useTranslate } from '../../../docs/site/use-translate';

const minDate = new Date(2012, 0, 10);
const maxDate = new Date(2012, 2, 20);

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
      :min-date="minDate"
      :max-date="maxDate"
      :default-date="minDate"
      :style="{ height: '500px' }"
    />
  </demo-block>
</template>
