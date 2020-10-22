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

<script>
import areaList from '../../area/demo/area';

export default {
  i18n: {
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
  },

  data() {
    return {
      areaList,
      searchResult: [],
    };
  },

  methods: {
    onSave() {
      this.$toast(this.t('save'));
    },

    onDelete() {
      this.$toast(this.t('delete'));
    },

    onChangeDetail(val) {
      this.searchResult = val ? this.t('searchResult') : [];
    },
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
