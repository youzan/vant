<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import VanPickerGroup from '..';
import VanTimePicker from '../../time-picker';
import VanDatePicker from '../../date-picker';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    date: '选择日期',
    time: '选择时间',
    title: '预约日期',
    nextStep: '下一步',
  },
  'en-US': {
    date: 'Date',
    time: 'Time',
    title: 'Title',
    nextStep: 'Next Step',
  },
});

const currentTime = ref(['12', '00']);
const currentDate = ref(['2022', '06', '01']);
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 5, 1);

const onConfirm = () => {
  showToast(`${currentDate.value.join('/')} ${currentTime.value.join(':')}`);
};
const onCancel = () => {
  showToast('cancel');
};
</script>

<template>
  <van-picker-group
    :title="t('title')"
    :tabs="[t('date'), t('time')]"
    :next-step-text="t('nextStep')"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <van-date-picker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
    />
    <van-time-picker v-model="currentTime" />
  </van-picker-group>
</template>
