<script setup lang="ts">
import VanDatePicker from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import type { PickerOption } from '../../picker';
import { DatePickerColumnType } from '../DatePicker';

const t = useTranslate({
  'zh-CN': {
    day: '日',
    year: '年',
    month: '月',
    chooseDate: '选择日期',
    columnsType: '选项类型',
    optionsFilter: '过滤选项',
    chooseYearMonth: '选择年月',
    optionsFormatter: '格式化选项',
  },
  'en-US': {
    day: ' Day',
    year: ' Year',
    month: ' Month',
    chooseDate: 'Choose Date',
    columnsType: 'Columns Type',
    optionsFilter: 'Options Filter',
    chooseYearMonth: 'Choose Year-Month',
    optionsFormatter: 'Options Formatter',
  },
});

const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 5, 1);
const basicDate = ref(['2021', '01', '01']);
const yearMonthDate = ref(['2021', '01']);
const formatterDate = ref(['2021', '01']);
const filterDate = ref(['2021', '01']);

const columnsType: DatePickerColumnType[] = ['year', 'month'];

const filter = (type: string, options: PickerOption[]) => {
  if (type === 'month') {
    return options.filter((option) => Number(option.value) % 6 === 0);
  }
  return options;
};

const formatter = (type: string, option: PickerOption) => {
  if (type === 'year') {
    option.text += t('year');
  }
  if (type === 'month') {
    option.text += t('month');
  }
  if (type === 'day') {
    option.text += t('day');
  }
  return option;
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-date-picker
      v-model="basicDate"
      :title="t('chooseDate')"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </demo-block>

  <demo-block card :title="t('columnsType')">
    <van-date-picker
      v-model="yearMonthDate"
      :title="t('chooseYearMonth')"
      :min-date="minDate"
      :max-date="maxDate"
      :columns-type="columnsType"
    />
  </demo-block>

  <demo-block card :title="t('optionsFormatter')">
    <van-date-picker
      v-model="formatterDate"
      :title="t('chooseYearMonth')"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
      :columns-type="columnsType"
    />
  </demo-block>

  <demo-block card :title="t('optionsFilter')">
    <van-date-picker
      v-model="filterDate"
      :title="t('optionFilter')"
      :filter="filter"
      :min-date="minDate"
      :max-date="maxDate"
      :columns-type="columnsType"
    />
  </demo-block>
</template>
