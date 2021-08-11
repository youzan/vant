<script setup lang="ts">
import { reactive } from 'vue';
import { areaList } from '@vant/area-data';
import { useTranslate } from '@demo/use-translate';
import { AreaColumnOption } from '../../area';
import { areaListEn } from '../../area/demo/area-en';

const i18n = {
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
};

const t = useTranslate(i18n);
const state = reactive({
  value: '',
  showArea: false,
});

const onConfirm = (values: AreaColumnOption[]) => {
  state.value = values
    .filter((item) => !!item)
    .map((item) => item.name)
    .join('/');
  state.showArea = false;
};

const onCancel = () => {
  state.showArea = false;
};
</script>

<template>
  <van-field
    v-model="state.value"
    is-link
    readonly
    name="area"
    :label="t('picker')"
    :placeholder="t('placeholder')"
    @click="state.showArea = true"
  />
  <van-popup
    v-model:show="state.showArea"
    round
    position="bottom"
    teleport="body"
  >
    <van-area
      :area-list="t('areaList')"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </van-popup>
</template>
