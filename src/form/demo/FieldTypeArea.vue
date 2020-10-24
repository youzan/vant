<template>
  <van-field
    readonly
    clickable
    name="area"
    :label="t('picker')"
    :model-value="value"
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
import AreaList from '../../area/demo/area';
import AreaListEn from '../../area/demo/area-en';

export default {
  i18n: {
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
  },

  data() {
    return {
      value: '',
      showArea: false,
    };
  },

  methods: {
    onConfirm(values) {
      this.value = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/');
      this.showArea = false;
    },

    onCancel() {
      this.showArea = false;
    },
  },
};
</script>
