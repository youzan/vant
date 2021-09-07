<script setup lang="ts">
import VanDatetimePicker from '..';
import { reactive } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    day: '日',
    year: '年',
    month: '月',
    timeType: '选择时间',
    dateType: '选择年月日',
    datetimeType: '选择完整时间',
    datehourType: '选择年月日小时',
    monthDayType: '选择月日',
    yearMonthType: '选择年月',
    optionFilter: '选项过滤器',
    sortColumns: '自定义列排序',
  },
  'en-US': {
    day: ' Day',
    year: ' Year',
    month: ' Month',
    timeType: 'Choose Time',
    dateType: 'Choose Date',
    datetimeType: 'Choose DateTime',
    datehourType: 'Choose DateHour',
    monthDayType: 'Choose Month-Day',
    yearMonthType: 'Choose Year-Month',
    optionFilter: 'Option Filter',
    sortColumns: 'Columns Order',
  },
});

const value = reactive({
  date: new Date(2021, 0, 17),
  time: '12:00',
  datetime: new Date(2020, 0, 1),
  datehour: new Date(2020, 0, 1),
  monthDay: new Date(2020, 0, 1),
  yearMonth: new Date(2020, 0, 1),
  optionFilter: '12:00',
  sortColumnsDate: new Date(2020, 0, 1),
});

const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 10, 1);

const filter = (type: string, values: string[]) => {
  if (type === 'minute') {
    return values.filter((value) => Number(value) % 5 === 0);
  }
  return values;
};

const formatter = (type: string, value: string) => {
  if (type === 'year') {
    return value + t('year');
  }
  if (type === 'month') {
    return value + t('month');
  }
  if (type === 'day') {
    return value + t('day');
  }
  return value;
};
</script>

<template>
  <demo-block card :title="t('dateType')">
    <van-datetime-picker
      v-model="value.date"
      type="date"
      :title="t('dateType')"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </demo-block>

  <demo-block card :title="t('yearMonthType')">
    <van-datetime-picker
      v-model="value.yearMonth"
      type="year-month"
      :title="t('yearMonthType')"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
    />
  </demo-block>

  <demo-block card :title="t('monthDayType')">
    <van-datetime-picker
      v-model="value.monthDay"
      type="month-day"
      :title="t('monthDayType')"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
    />
  </demo-block>

  <demo-block card :title="t('timeType')">
    <van-datetime-picker
      v-model="value.time"
      type="time"
      :title="t('timeType')"
      :min-hour="10"
      :max-hour="20"
    />
  </demo-block>

  <demo-block card :title="t('datetimeType')">
    <van-datetime-picker
      v-model="value.datetime"
      type="datetime"
      :title="t('datetimeType')"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </demo-block>

  <demo-block card :title="t('datehourType')">
    <van-datetime-picker
      v-model="value.datehour"
      type="datehour"
      :title="t('datehourType')"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </demo-block>

  <demo-block card :title="t('optionFilter')">
    <van-datetime-picker
      v-model="value.optionFilter"
      type="time"
      :title="t('optionFilter')"
      :filter="filter"
    />
  </demo-block>

  <demo-block card :title="t('sortColumns')">
    <van-datetime-picker
      v-model="value.sortColumnsDate"
      type="date"
      :title="t('sortColumns')"
      :columns-order="['month', 'day', 'year']"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
    />
  </demo-block>
</template>
