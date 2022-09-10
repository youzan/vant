<script setup lang="ts">
import { ref } from 'vue';
import VanPicker from '..';
import VanField from '../../field';
import VanPopup from '../../popup';
import { basicColumns } from './data';
import { useTranslate } from '../../../docs/site';
import type { PickerConfirmEventParams } from '../types';

const t = useTranslate({
  'zh-CN': {
    city: '城市',
    withPopup: '搭配弹出层使用',
    chooseCity: '选择城市',
    basicColumns: basicColumns['zh-CN'],
  },
  'en-US': {
    city: 'City',
    withPopup: 'With Popup',
    chooseCity: 'Choose City',
    basicColumns: basicColumns['en-US'],
  },
});

const showPicker = ref(false);
const fieldValue = ref('');

const onClickField = () => {
  showPicker.value = true;
};
const onCancel = () => {
  showPicker.value = false;
};
const onConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
  showPicker.value = false;
  fieldValue.value = selectedOptions[0]!.text as string;
};
</script>

<template>
  <demo-block card :title="t('withPopup')">
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      :label="t('city')"
      :placeholder="t('chooseCity')"
      @click="onClickField"
    />
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        :title="t('title')"
        :columns="t('basicColumns')"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
  </demo-block>
</template>
