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
          @finish="onFinish('base', $event)"
        />
      </van-popup>
    </demo-block>

    <demo-block card :title="t('customColor')">
      <van-field
        is-link
        readonly
        :label="t('area')"
        :value="customColor.value"
        :placeholder="t('selectArea')"
        @click="customColor.show = true"
      />
      <van-popup v-model="customColor.show" round position="bottom">
        <van-cascader
          :title="t('selectArea')"
          :options="t('options')"
          active-color="#1989fa"
          @close="customColor.show = false"
          @finish="onFinish('customColor', $event)"
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
      options: zhCNOptions,
      selectArea: '请选择地区',
      customColor: '自定义颜色',
    },
    'en-US': {
      area: 'Area',
      selectArea: 'Select Area',
      customColor: 'Custom Color',
    },
  },

  data() {
    return {
      base: {
        show: false,
        value: '',
      },
      customColor: {
        show: false,
        value: '',
      },
    };
  },

  methods: {
    onFinish(type, { selectedOptions }) {
      const fieldValue = selectedOptions.map((option) => option.text).join('/');
      this[type] = {
        show: false,
        value: fieldValue,
      };
    },
  },
};
</script>
