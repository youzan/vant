<template>
  <demo-section>
    <demo-block card :title="t('basicUsage')">
      <van-field
        is-link
        readonly
        :label="t('area')"
        :placeholder="t('selectArea')"
        @click="showBase = true"
      />
      <van-popup v-model="showBase" round position="bottom">
        <van-cascader :title="t('selectArea')" :options="t('options')" />
      </van-popup>
    </demo-block>
  </demo-section>
</template>

<script>
import zhCNOptions from './area';

export default {
  i18n: {
    'zh-CN': {
      area: '地区',
      selectArea: '请选择地区',
      options: zhCNOptions,
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
