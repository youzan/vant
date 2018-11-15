<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-area
        ref="area"
        :area-list="$t('areaList')"
      />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-area
        :area-list="$t('areaList')"
        :value="value"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-area
        :area-list="$t('areaList')"
        :columns-num="2"
        :title="$t('title')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
import AreaList from './area';
import AreaListEn from './area-en';

export default {
  i18n: {
    'zh-CN': {
      title2: '选中省市区',
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
      value: '330302'
    };
  }
};
</script>
