<script setup lang="ts">
import { reactive } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    calendar: '日历',
    placeholder: '点击选择日期',
  },
  'en-US': {
    calendar: 'Calendar',
    placeholder: 'Select date',
  },
};

const t = useTranslate(i18n);
const state = reactive({
  value: '',
  showCalendar: false,
});

const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`;

const onConfirm = (date: Date) => {
  state.value = formatDate(date);
  state.showCalendar = false;
};
</script>

<template>
  <van-field
    v-model="state.value"
    is-link
    readonly
    name="calendar"
    :label="t('calendar')"
    :placeholder="t('placeholder')"
    @click="state.showCalendar = true"
  />
  <van-calendar
    v-model:show="state.showCalendar"
    round
    teleport="body"
    @confirm="onConfirm"
  />
</template>
