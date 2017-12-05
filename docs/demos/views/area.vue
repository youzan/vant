<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-area :areaList="areaList" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-area :areaList="areaList" :value="value" />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-area :areaList="areaList" :columnsNum="2" />
    </demo-block>
  </demo-section>
</template>

<script>
import AreaList from '../mock/area.json';

export default {
  i18n: {
    'zh-CN': {
      title2: '选中省市县',
      title3: '配置显示列'
    },
    'en-US': {
      title2: 'Initial Value',
      title3: 'Columns Number'
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
