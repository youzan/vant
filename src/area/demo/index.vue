<template>
  <demo-section>
    <demo-block card :title="t('basicUsage')">
      <van-area :title="t('title')" :area-list="t('areaList')"  converter="json" label-field="地区选择" :value.sync="sarea2"/>
      <!-- <van-area :title="t('title')" :area-list="t('areaList')"  areaListprop='{"province_list":{"110000":"北京市"},"city_list":{"110100":"北京市"},"county_list":{"110101":"东城区","110102":"西城区","110105":"朝阳区","110106":"丰台区","110107":"石景山区","110108":"海淀区","110109":"门头沟区","110111":"房山区","110112":"通州区","110113":"顺义区","110114":"昌平区","110115":"大兴区","110116":"怀柔区","110117":"平谷区","110118":"密云区","110119":"延庆区"}}' converter="json" label-field="地区选择" :value.sync="sarea"/> -->
       <van-area :title="t('title')" :area-list="t('areaList')" converter="json" label-field="地区选择" :value.sync="sarea2"/>
       <van-area :title="t('title')" :area-list="t('areaList')" converter="json" label-field="地区选择" :value.sync="sarea"/>
    </demo-block>
    <!-- <demo-block card :title="t('basicUsage')">
      <van-area :title="t('title')" />
    </demo-block>

    <demo-block card :title="t('title2')">
      <van-area :title="t('title')" :area-list="t('areaList')" :value.sync="value" />
    </demo-block>

    <demo-block card :title="t('title3')">
      <van-area
        :title="t('title')"
        :area-list="t('areaList')"
        :columns-num="2"
      />
    </demo-block>

    <demo-block card :title="t('title4')">
      <van-area
        :title="t('title')"
        :area-list="t('areaList')"
        :columns-placeholder="t('columnsPlaceholder')"
      />
    </demo-block> -->
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
  },

  data() {
    return {
      value: '330302',
      ara1111: '310113',
      sarea: '',
      sarea2: "140303",
    };
  },
};
</script>
