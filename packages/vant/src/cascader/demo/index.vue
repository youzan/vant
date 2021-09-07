<script setup lang="ts">
import VanField from '../../field';
import VanPopup from '../../popup';
import VanCascader, { CascaderOption } from '..';
import { computed, reactive } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { deepClone } from '../../utils/deep-clone';
import zhCNOptions from './area-zh-CN';
import enUSOptions from './area-en-US';

const t = useTranslate({
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
    customFieldNames: '自定义字段名',
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
    customFieldNames: 'Custom Field Names',
  },
});

type StateItem = {
  show: boolean;
  value: string | number | null;
  result: string;
  options?: CascaderOption[];
};

const baseState = reactive<StateItem>({
  show: false,
  value: '',
  result: '',
});
const customColorState = reactive<StateItem>({
  show: false,
  value: null,
  result: '',
});
const asyncState = reactive<StateItem>({
  show: false,
  value: null,
  result: '',
  options: t('asyncOptions1'),
});
const customFieldState = reactive<StateItem>({
  show: false,
  value: null,
  result: '',
});

const fieldNames = {
  text: 'name',
  value: 'code',
  children: 'items',
};

const customFieldOptions = computed(() => {
  const options = deepClone(t('options'));
  const adjustFieldName = (item: CascaderOption) => {
    if ('text' in item) {
      item.name = item.text;
      delete item.text;
    }
    if ('value' in item) {
      item.code = item.value;
      delete item.value;
    }
    if ('children' in item) {
      item.items = item.children;
      delete item.children;
      item.items.forEach(adjustFieldName);
    }
  };
  options.forEach(adjustFieldName);
  return options;
});

const loadDynamicOptions = ({ value }: CascaderOption) => {
  if (value === '330000') {
    setTimeout(() => {
      asyncState.options![0].children = t('asyncOptions2');
    }, 500);
  }
};

const onFinish = (
  state: StateItem,
  {
    value,
    selectedOptions,
  }: { value: number | string; selectedOptions: CascaderOption[] }
) => {
  const result = selectedOptions
    .map((option) => option.text || option.name)
    .join('/');

  state.show = false;
  state.value = value;
  state.result = result;
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-field
      v-model="baseState.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="baseState.show = true"
    />
    <van-popup
      v-model:show="baseState.show"
      round
      teleport="body"
      position="bottom"
    >
      <van-cascader
        v-model="baseState.value"
        :title="t('selectArea')"
        :options="t('options')"
        @close="baseState.show = false"
        @finish="onFinish(baseState, $event)"
      />
    </van-popup>
  </demo-block>

  <demo-block card :title="t('customColor')">
    <van-field
      v-model="customColorState.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="customColorState.show = true"
    />
    <van-popup
      v-model:show="customColorState.show"
      round
      teleport="body"
      position="bottom"
    >
      <van-cascader
        v-model="customColorState.value"
        :title="t('selectArea')"
        :options="t('options')"
        active-color="#1989fa"
        @close="customColorState.show = false"
        @finish="onFinish(customColorState, $event)"
      />
    </van-popup>
  </demo-block>

  <demo-block card :title="t('asyncOptions')">
    <van-field
      v-model="asyncState.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="asyncState.show = true"
    />
    <van-popup
      v-model:show="asyncState.show"
      round
      teleport="body"
      position="bottom"
    >
      <van-cascader
        v-model="asyncState.value"
        :title="t('selectArea')"
        :options="asyncState.options"
        @close="asyncState.show = false"
        @change="loadDynamicOptions"
        @finish="onFinish(asyncState, $event)"
      />
    </van-popup>
  </demo-block>

  <demo-block card :title="t('customFieldNames')">
    <van-field
      v-model="customFieldState.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="customFieldState.show = true"
    />
    <van-popup
      v-model:show="customFieldState.show"
      round
      teleport="body"
      position="bottom"
      safe-area-inset-bottom
    >
      <van-cascader
        v-model="customFieldState.value"
        :title="t('selectArea')"
        :options="customFieldOptions"
        :field-names="fieldNames"
        @close="customFieldState.show = false"
        @finish="onFinish(customFieldState, $event)"
      />
    </van-popup>
  </demo-block>
</template>
