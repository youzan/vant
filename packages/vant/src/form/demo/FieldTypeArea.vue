<script setup lang="ts">
import VanArea from '../../area';
import VanField from '../../field';
import VanPopup from '../../popup';
import { ref } from 'vue';
import { areaList } from '@vant/area-data';
import { useTranslate } from '../../../docs/site';
import { areaListEn } from '../../area/demo/area-en';
import type { PickerConfirmEventParams } from '../../picker';

const t = useTranslate({
  'zh-CN': {
    picker: '地区选择',
    areaList,
    placeholder: '点击选择省市区',
  },
  'en-US': {
    picker: 'Area Picker',
    areaList: areaListEn,
    placeholder: 'Select area',
  },
});

const areaCode = ref('');
const pickerValue = ref('');
const showArea = ref(false);

const onConfirm = ({
  selectedValues,
  selectedOptions,
}: PickerConfirmEventParams) => {
  areaCode.value = selectedOptions.map((item) => item!.text).join('/');
  pickerValue.value = selectedValues.length
    ? (selectedValues[selectedValues.length - 1] as string)
    : '';
  showArea.value = false;
};

const onCancel = () => {
  showArea.value = false;
};
</script>

<template>
  <van-field
    v-model="areaCode"
    is-link
    readonly
    name="area"
    :label="t('picker')"
    :placeholder="t('placeholder')"
    @click="showArea = true"
  />
  <van-popup
    v-model:show="showArea"
    destroy-on-close
    round
    position="bottom"
    teleport="body"
  >
    <van-area
      :area-list="t('areaList')"
      :model-value="pickerValue"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </van-popup>
</template>
