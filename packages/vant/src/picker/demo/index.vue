<script setup lang="ts">
import VanPicker from '..';
import {
  dateColumns,
  basicColumns,
  cascadeColumns,
  disabledColumns,
  customKeyColumns,
} from './data';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    cascade: '级联选择',
    modelValue: '双向绑定',
    showToolbar: '展示顶部栏',
    dateColumns: dateColumns['zh-CN'],
    basicColumns: basicColumns['zh-CN'],
    defaultIndex: '默认选中项',
    disableOption: '禁用选项',
    cascadeColumns: cascadeColumns['zh-CN'],
    disabledColumns: disabledColumns['zh-CN'],
    multipleColumns: '多列选择',
    customChildrenKey: '自定义 Columns 结构',
    customChildrenColumns: customKeyColumns['zh-CN'],
    toastContent: (value: string) => `当前值：${value}`,
  },
  'en-US': {
    cascade: 'Cascade',
    modelValue: 'v-model',
    showToolbar: 'Show Toolbar',
    dateColumns: dateColumns['en-US'],
    basicColumns: basicColumns['en-US'],
    defaultIndex: 'Default Index',
    disableOption: 'Disable Option',
    cascadeColumns: cascadeColumns['en-US'],
    disabledColumns: disabledColumns['en-US'],
    multipleColumns: 'Multiple Columns',
    customChildrenKey: 'Custom Columns Fields',
    customChildrenColumns: customKeyColumns['en-US'],
    toastContent: (value: string) => `Value: ${value}`,
  },
});

const onChange = (value: string[]) => {
  console.log('onChange', value)
}

const onScrollInto = ({
  columnIndex,
  currentOption,
}: any) => {
  console.log('onScrollInto', columnIndex, currentOption);
  // 一个一个滑动的话，currentOption是当前选中的值。
  //通过惯性滚动的话，currentOption并不是当前选中的值。
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-picker
      :title="t('title')"
      :columns="t('basicColumns')"
      @scroll-into="onScrollInto"
      @change="onChange"
    />
  </demo-block>
</template>
