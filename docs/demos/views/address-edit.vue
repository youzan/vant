<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-address-edit
        :areaList="areaList"
        :showPostal="true"
        :showSetDefault="true"
        :showSearchResult="true"
        :searchResult="searchResult"
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

    },
    'en-US': {

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
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }, {
          name: '黄龙万科中心H座'
        }, {
          name: '黄龙万科中心H座',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>


<style lang="postcss">

</style>
