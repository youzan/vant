<template>
  <demo-block card :title="t('basicUsage')">
    <van-area :title="t('title')" :area-list="t('areaList')" />
  </demo-block>

  <demo-block card :title="t('title2')">
    <van-area :title="t('title')" :area-list="t('areaList')" :value="value" />
  </demo-block>

  <demo-block card :title="t('title3')">
    <van-area :title="t('title')" :area-list="t('areaList')" :columns-num="2" />
  </demo-block>

  <demo-block card :title="t('title4')">
    <van-area
      :title="t('title')"
      :area-list="t('areaList')"
      :columns-placeholder="t('columnsPlaceholder')"
    />
  </demo-block>
</template>

<script lang="ts">
import { ref } from 'vue';
import AreaList from './area';
import AreaListEn from './area-en';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    title2: '选中省市区',
    title3: '配置显示列',
    title4: '配置列占位提示文字',
    columnsPlaceholder: ['请选择', '请选择', '请选择'],
    areaList: AreaList,
  },
  'en-US': {
    title2: 'Initial Value',
    title3: 'Columns Number',
    title4: 'Columns Placeholder',
    columnsPlaceholder: ['Choose', 'Choose', 'Choose'],
    areaList: AreaListEn,
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const value = ref('330302');

    return {
      t,
      value,
    };
  },
};
</script>
