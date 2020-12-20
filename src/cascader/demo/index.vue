<template>
  <demo-section>
    <demo-block card :title="t('basicUsage')">
      <van-field
        is-link
        readonly
        :label="t('area')"
        :value="base.result"
        :placeholder="t('selectArea')"
        @click="base.show = true"
      />
      <van-popup v-model="base.show" round position="bottom">
        <van-cascader
          v-model="base.value"
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
        :value="customColor.result"
        :placeholder="t('selectArea')"
        @click="customColor.show = true"
      />
      <van-popup v-model="customColor.show" round position="bottom">
        <van-cascader
          v-model="customColor.value"
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
import zhCNOptions from './area-zh-CN';
import enUSOptions from './area-en-US';

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
      options: enUSOptions,
      selectArea: 'Select Area',
      customColor: 'Custom Color',
    },
  },

  data() {
    return {
      base: {
        show: false,
        value: '',
        result: '',
      },
      customColor: {
        show: false,
        value: null,
        result: '',
      },
    };
  },

  methods: {
    onFinish(type, { value, selectedOptions }) {
      const result = selectedOptions.map((option) => option.text).join('/');
      this[type] = {
        show: false,
        value,
        result,
      };
    },
  },
};
</script>
