<template>
  <demo-block card :title="t('basicUsage')">
    <van-field
      v-model="base.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="base.show = true"
    />
    <van-popup v-model:show="base.show" round position="bottom">
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
      v-model="customColor.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="customColor.show = true"
    />
    <van-popup v-model:show="customColor.show" round position="bottom">
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

  <demo-block card :title="t('asyncOptions')">
    <van-field
      v-model="async.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="async.show = true"
    />
    <van-popup v-model:show="async.show" round position="bottom">
      <van-cascader
        v-model="async.value"
        :title="t('selectArea')"
        :options="async.options"
        @close="async.show = false"
        @change="loadDynamicOptions"
        @finish="onFinish('async', $event)"
      />
    </van-popup>
  </demo-block>
</template>

<script>
import zhCNOptions from './area-zh-CN';
import enUSOptions from './area-en-US';
import { reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    area: '地区',
    options: zhCNOptions,
    selectArea: '请选择地区',
    customColor: '自定义颜色',
    asyncOptions: '异步加载选项',
    asyncOptions1: [
      {
        text: '浙江省',
        value: '330000',
        children: [],
      },
    ],
    asyncOptions2: [
      { text: '杭州市', value: '330100' },
      { text: '宁波市', value: '330200' },
    ],
  },
  'en-US': {
    area: 'Area',
    options: enUSOptions,
    selectArea: 'Select Area',
    customColor: 'Custom Color',
    asyncOptions: 'Async Options',
    asyncOptions1: [
      {
        text: 'Zhejiang',
        value: '330000',
        children: [],
      },
    ],
    asyncOptions2: [
      { text: 'Hangzhou', value: '330100' },
      { text: 'Ningbo', value: '330200' },
    ],
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
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
      async: {
        show: false,
        value: null,
        result: '',
        options: t('asyncOptions1'),
      },
    });

    const loadDynamicOptions = ({ value }) => {
      if (value === '330000') {
        setTimeout(() => {
          state.async.options[0].children = t('asyncOptions2');
        }, 500);
      }
    };

    const onFinish = (type, { value, selectedOptions }) => {
      const result = selectedOptions.map((option) => option.text).join('/');
      state[type] = {
        ...state[type],
        show: false,
        value,
        result,
      };
    };

    return {
      ...toRefs(state),
      t,
      onFinish,
      loadDynamicOptions,
    };
  },
};
</script>
