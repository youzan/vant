<template>
  <van-field
    v-model="value"
    readonly
    clickable
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

<script>
import { reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';
import AreaList from '../../area/demo/area';
import AreaListEn from '../../area/demo/area-en';

const i18n = {
  'zh-CN': {
    picker: '地区选择',
    areaList: AreaList,
    placeholder: '点击选择省市区',
  },
  'en-US': {
    picker: 'Area Picker',
    areaList: AreaListEn,
    placeholder: 'Select area',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      value: '',
      showArea: false,
    });

    const onConfirm = (values) => {
      state.value = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/');
      state.showArea = false;
    };

    const onCancel = () => {
      state.showArea = false;
    };

    return {
      ...toRefs(state),
      t,
      onCancel,
      onConfirm,
    };
  },
};
</script>
