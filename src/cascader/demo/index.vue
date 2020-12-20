<template>
  <demo-section>
    <demo-block card :title="t('basicUsage')">
      <van-field
        is-link
        readonly
        :label="t('area')"
        :value="base.value"
        :placeholder="t('selectArea')"
        @click="base.show = true"
      />
      <van-popup v-model="base.show" round position="bottom">
        <van-cascader
          :title="t('selectArea')"
          :options="t('options')"
          @close="base.show = false"
          @finish="onFinish"
        />
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
      base: {
        show: false,
        value: '',
      },
    };
  },

  methods: {
    onFinish({ selectedOptions }) {
      this.base.show = false;
      this.base.value = selectedOptions.map((option) => option.text).join('/');
    },
  },
};
</script>
