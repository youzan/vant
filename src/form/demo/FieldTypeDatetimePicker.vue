<script setup lang="ts">
import { reactive } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    label: '时间选择',
    placeholder: '点击选择时间',
  },
  'en-US': {
    label: 'Datetime Picker',
    placeholder: 'Select time',
  },
};

const t = useTranslate(i18n);
const state = reactive({
  value: '',
  showPicker: false,
});

const onConfirm = (time: string) => {
  state.value = time;
  state.showPicker = false;
};

const onCancel = () => {
  state.showPicker = false;
};
</script>

<template>
  <van-field
    v-model="state.value"
    is-link
    readonly
    name="datetimePicker"
    :label="t('label')"
    :placeholder="t('placeholder')"
    @click="state.showPicker = true"
  />
  <van-popup
    v-model:show="state.showPicker"
    round
    position="bottom"
    teleport="body"
  >
    <van-datetime-picker type="time" @confirm="onConfirm" @cancel="onCancel" />
  </van-popup>
</template>
