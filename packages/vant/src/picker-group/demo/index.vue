<script setup lang="ts">
import SelectDateTime from './SelectDateTime.vue';
import SelectTimeRange from './SelectTimeRange.vue';
import SelectDateRange from './SelectDateRange.vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    selectDateTime: '选择日期时间',
    selectDateRange: '选择日期范围',
    selectTimeRange: '选择时间范围',
  },
  'en-US': {
    selectDateTime: 'Select Date Time',
    selectDateRange: 'Select Date Range',
    selectTimeRange: 'Select Time Range',
  },
});
</script>

<template>
  <demo-block card :title="t('selectDateTime')">
    <select-date-time />
  </demo-block>

  <demo-block card :title="t('selectDateRange')">
    <select-date-range />
  </demo-block>

  <demo-block card :title="t('selectTimeRange')">
    <select-time-range />
  </demo-block>
</template>
