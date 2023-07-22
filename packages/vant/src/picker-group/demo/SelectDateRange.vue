<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTranslate } from '../../../docs/site';
import VanPickerGroup from '..';
import VanDatePicker from '../../date-picker';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    startDate: '开始日期',
    endDate: '结束日期',
    title: '预约日期',
  },
  'en-US': {
    startDate: 'Start Date',
    endDate: 'End Date',
    title: 'Title',
  },
});

const startDate = ref(['2022', '06', '01']);
const endDate = ref(['2023', '06', '01']);
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 5, 1);
const endMinDate = computed(
  () =>
    new Date(
      Number(startDate.value[0]),
      Number(startDate.value[1]) - 1,
      Number(startDate.value[2]),
    ),
);

const onConfirm = () => {
  showToast(`${startDate.value.join('/')} - ${endDate.value.join('/')}`);
};
const onCancel = () => {
  showToast('cancel');
};
</script>

<template>
  <van-picker-group
    :title="t('title')"
    :tabs="[t('startDate'), t('endDate')]"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <van-date-picker
      v-model="startDate"
      :min-date="minDate"
      :max-date="maxDate"
    />
    <van-date-picker
      v-model="endDate"
      :min-date="endMinDate"
      :max-date="maxDate"
    />
  </van-picker-group>
</template>
