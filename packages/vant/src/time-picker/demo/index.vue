<script setup lang="ts">
import VanTimePicker from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import type { PickerOption } from '../../picker';
import type { TimePickerColumnType } from '../TimePicker';

const t = useTranslate({
  'zh-CN': {
    hour: '时',
    minute: '分',
    timeRange: '时间范围',
    chooseTime: '选择时间',
    columnsType: '选项类型',
    optionsFilter: '过滤选项',
    optionsFormatter: '格式化选项',
    overallTimeRange: '整体时间范围',
  },
  'en-US': {
    hour: 'h',
    minute: 'm',
    timeRange: 'Time Range',
    chooseTime: 'Choose Time',
    columnsType: 'Columns Type',
    optionsFilter: 'Options Filter',
    optionsFormatter: 'Options Formatter',
    overallTimeRange: 'Overall Time Range',
  },
});

const baseTime = ref(['12', '00']);
const secondTime = ref(['12', '00', '00']);
const rangeTime = ref(['12', '35']);
const filterTime = ref(['12', ' 00']);
const formatterTime = ref(['12', '00']);
const hourMinuteTime = ref(['12', '00', '00']);

const columnsType: TimePickerColumnType[] = ['hour', 'minute', 'second'];

const filter = (type: string, options: PickerOption[]) => {
  if (type === 'minute') {
    return options.filter((option) => Number(option.value) % 10 === 0);
  }
  return options;
};

const timeFilter = (
  type: string,
  options: PickerOption[],
  values: string[],
) => {
  const hour = +values[0];

  if (type === 'hour') {
    return options.filter(
      (option) => Number(option.value) >= 8 && Number(option.value) <= 18,
    );
  }

  if (type === 'minute') {
    options = options.filter((option) => Number(option.value) % 10 === 0);

    if (hour === 8) {
      return options.filter((option) => Number(option.value) >= 40);
    }

    if (hour === 18) {
      return options.filter((option) => Number(option.value) <= 20);
    }
  }

  return options;
};

const formatter = (type: string, option: PickerOption) => {
  if (type === 'hour') {
    option.text += t('hour');
  }
  if (type === 'minute') {
    option.text += t('minute');
  }
  return option;
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-time-picker v-model="baseTime" :title="t('chooseTime')" />
  </demo-block>

  <demo-block card :title="t('columnsType')">
    <van-time-picker
      v-model="secondTime"
      :title="t('chooseTime')"
      :columns-type="columnsType"
    />
  </demo-block>

  <demo-block card :title="t('timeRange')">
    <van-time-picker
      v-model="rangeTime"
      :title="t('chooseTime')"
      :min-hour="10"
      :max-hour="20"
      :min-minute="30"
      :max-minute="40"
    />
  </demo-block>

  <demo-block card :title="t('overallTimeRange')">
    <van-time-picker
      v-model="hourMinuteTime"
      :title="t('chooseTime')"
      :columns-type="['hour', 'minute', 'second']"
      min-time="09:40:10"
      max-time="20:20:50"
    />
  </demo-block>

  <demo-block card :title="t('optionsFormatter')">
    <van-time-picker
      v-model="formatterTime"
      :title="t('chooseTime')"
      :formatter="formatter"
    />
  </demo-block>

  <demo-block card :title="t('optionsFilter')">
    <van-time-picker
      v-model="filterTime"
      :title="t('chooseTime')"
      :filter="filter"
    />
  </demo-block>

  <demo-block card :title="t('advancedUsage')">
    <van-time-picker :title="t('chooseTime')" :filter="timeFilter" />
  </demo-block>
</template>
