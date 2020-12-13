<template>
  <demo-block :title="t('basicUsage')">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="t('areaColumnsPlaceholder')"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </demo-block>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@demo/use-translate';
import Toast from '../../toast';
import areaList from '../../area/demo/area';

const i18n = {
  'zh-CN': {
    areaColumnsPlaceholder: ['请选择', '请选择', '请选择'],
    searchResult: [
      {
        name: '黄龙万科中心',
        address: '杭州市西湖区',
      },
      {
        name: '黄龙万科中心G座',
      },
      {
        name: '黄龙万科中心H座',
        address: '杭州市西湖区',
      },
    ],
  },
  'en-US': {
    areaColumnsPlaceholder: ['Choose', 'Choose', 'Choose'],
    searchResult: [
      {
        name: 'Name1',
        address: 'Address',
      },
      {
        name: 'Name2',
      },
      {
        name: 'Name3',
        address: 'Address',
      },
    ],
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const searchResult = ref([]);

    const onSave = () => {
      Toast(t('save'));
    };

    const onDelete = () => {
      Toast(t('delete'));
    };

    const onChangeDetail = (val: string) => {
      searchResult.value = val ? t('searchResult') : [];
    };

    return {
      t,
      onSave,
      onDelete,
      areaList,
      searchResult,
      onChangeDetail,
    };
  },
};
</script>

<style lang="less">
.demo-address-edit {
  .van-doc-demo-block__title {
    padding-bottom: 0;
  }
}
</style>
