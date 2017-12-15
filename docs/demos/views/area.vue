<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-area :areaList="$t('areaList')" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-area :areaList="$t('areaList')" :value="value" />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-area :areaList="$t('areaList')" :columnsNum="2" />
    </demo-block>
  </demo-section>
</template>

<script>
import AreaList from '../mock/area.json';
import AreaListEn from '../mock/areaEn.json';

export default {
  i18n: {
    'zh-CN': {
      title2: '选中省市县',
      title3: '配置显示列',
      areaList: AreaList
    },
    'en-US': {
      title2: 'Initial Value',
      title3: 'Columns Number',
      areaList: AreaListEn
    }
  },

  data() {
    return {
      areaList: AreaList,
      value: '110101'
    };
  }
};
</script>
