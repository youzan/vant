<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </demo-block>
  </demo-section>
</template>

<script>
import areaList from '../mock/area.json';

export default {
  i18n: {
    'zh-CN': {
      searchResult: [{
        name: '黄龙万科中心',
        address: '杭州市西湖区'
      }, {
        name: '黄龙万科中心H座'
      }, {
        name: '黄龙万科中心H座',
        address: '杭州市西湖区'
      }]
    },
    'en-US': {
      searchResult: [{
        name: 'Name',
        address: 'Address'
      }, {
        name: 'Name'
      }, {
        name: 'Name',
        address: 'Address'
      }]
    }
  },

  data() {
    return {
      areaList,
      searchResult: []
    };
  },

  methods: {
    onSave() {
      Toast('save');
    },

    onDelete() {
      Toast('delete');
    },

    onChangeDetail(val) {
      this.searchResult = val ? this.$t('searchResult') : [];
    }
  }
};
</script>
