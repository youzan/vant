<script setup lang="ts">
import { ref } from 'vue';
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
const areaCode = ref('');
const showArea = ref(false);

const onConfirm = (values: AreaColumnOption[]) => {
  areaCode.value = values
    .filter((item) => !!item)
    .map((item) => item.name)
    .join('/');
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
  <van-popup v-model:show="showArea" round position="bottom" teleport="body">
    <van-area
      :area-list="t('areaList')"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </van-popup>
</template>
