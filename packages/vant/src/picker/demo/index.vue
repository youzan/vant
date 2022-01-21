<script setup lang="ts">
import WithPopup from './WithPopup.vue';
import VanPicker, {
  PickerChangeEventParams,
  PickerConfirmEventParams,
} from '..';
import {
  dateColumns,
  basicColumns,
  cascadeColumns,
  disabledColumns,
  customKeyColumns,
} from './data';
import { Toast } from '../../toast';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    cascade: '级联选择',
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
    toastContent: (value: string, index: number) =>
      `Value: ${value}, Index：${index}`,
  },
});

const customFieldName = {
  text: 'cityName',
  value: 'cityName',
  children: 'cities',
};

const onChange1 = ({ selectedValues }: PickerChangeEventParams) => {
  Toast(t('toastContent', selectedValues.join(',')));
};

const onConfirm = ({ selectedValues }: PickerConfirmEventParams) => {
  Toast(t('toastContent', selectedValues.join(',')));
};

const onCancel = () => Toast(t('cancel'));
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-picker
      :title="t('title')"
      :columns="t('basicColumns')"
      @change="onChange1"
      @confirm="onConfirm"
    />
  </demo-block>

  <WithPopup />

  <demo-block card :title="t('multipleColumns')">
    <van-picker
      :title="t('title')"
      :columns="t('dateColumns')"
      @cancel="onCancel"
      @confirm="onConfirm"
    />
  </demo-block>

  <demo-block card :title="t('cascade')">
    <van-picker :title="t('title')" :columns="t('cascadeColumns')" />
  </demo-block>

  <demo-block card :title="t('disableOption')">
    <van-picker :title="t('title')" :columns="t('disabledColumns')" />
  </demo-block>

  <demo-block card :title="t('loadingStatus')">
    <van-picker loading :title="t('title')" />
  </demo-block>

  <demo-block card :title="t('customChildrenKey')">
    <van-picker
      :title="t('title')"
      :columns="t('customChildrenColumns')"
      :columns-field-names="customFieldName"
    />
  </demo-block>
</template>
