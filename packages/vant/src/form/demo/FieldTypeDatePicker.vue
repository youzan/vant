<script setup lang="ts">
import VanField from '../../field';
import VanPopup from '../../popup';
import VanDatePicker from '../../date-picker';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import type { PickerConfirmEventParams } from '../../picker';

const t = useTranslate({
  'zh-CN': {
    label: '时间选择',
    placeholder: '点击选择时间',
  },
  'en-US': {
    label: 'Datetime Picker',
    placeholder: 'Select time',
  },
});

const result = ref('');
const showPicker = ref(false);

const onConfirm = ({ selectedValues }: PickerConfirmEventParams) => {
  result.value = selectedValues.join('/');
  showPicker.value = false;
};

const onCancel = () => {
  showPicker.value = false;
};
</script>

<template>
  <van-field
    v-model="result"
    is-link
    readonly
    name="datePicker"
    :label="t('label')"
    :placeholder="t('placeholder')"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" round position="bottom" teleport="body">
    <van-date-picker @confirm="onConfirm" @cancel="onCancel" />
  </van-popup>
</template>
