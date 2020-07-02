<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-field
        is-link
        readonly
        :label="t('area')"
        :placeholder="t('selectArea')"
        @click="showBase = true"
      />
      <van-cascader :show.sync="showBase" :title="t('selectArea')" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      area: '地区',
      selectArea: '请选择地区',
    },
    'en-US': {
      area: 'Area',
      selectArea: 'Select Area',
    },
  },

  data() {
    return {
      showBase: false,
    };
  },
};
</script>
