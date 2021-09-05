<script setup lang="ts">
import VanPicker from '..';
import VanField from '../../field';
import VanPopup from '../../popup';
import { ref, computed } from 'vue';
import { dateColumns, cascadeColumns, cascadeColumnsCustomKey } from './data';
import { useTranslate } from '../../../docs/site/use-translate';
import { Toast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    city: '城市',
    cascade: '级联选择',
    withPopup: '搭配弹出层使用',
    chooseCity: '选择城市',
    showToolbar: '展示顶部栏',
    dateColumns: dateColumns['zh-CN'],
    defaultIndex: '默认选中项',
    disableOption: '禁用选项',
    cascadeColumns: cascadeColumns['zh-CN'],
    multipleColumns: '多列选择',
    setColumnValues: '动态设置选项',
    customChildrenKey: '自定义 Columns 结构',
    customChildrenColumns: cascadeColumnsCustomKey['zh-CN'],
    textColumns: [
      '杭州',
      '宁波',
      '温州',
      '绍兴',
      '湖州',
      '嘉兴',
      '金华',
      '衢州',
    ],
    disabledColumns: [
      { text: '杭州', disabled: true },
      { text: '宁波' },
      { text: '温州' },
    ],
    column3: {
      浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      福建: ['福州', '厦门', '莆田', '三明', '泉州'],
    },
    toastContent: (value: string, index: number) =>
      `当前值：${value}, 当前索引：${index}`,
  },
  'en-US': {
    city: 'City',
    cascade: 'Cascade',
    withPopup: 'With Popup',
    chooseCity: 'Choose City',
    showToolbar: 'Show Toolbar',
    dateColumns: dateColumns['en-US'],
    defaultIndex: 'Default Index',
    disableOption: 'Disable Option',
    cascadeColumns: cascadeColumns['en-US'],
    multipleColumns: 'Multiple Columns',
    setColumnValues: 'Set Column Values',
    customChildrenKey: 'Custom Columns Fields',
    customChildrenColumns: cascadeColumnsCustomKey['en-US'],
    textColumns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
    disabledColumns: [
      { text: 'Delaware', disabled: true },
      { text: 'Florida' },
      { text: 'Georqia' },
    ],
    column3: {
      Group1: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
      Group2: ['Alabama', 'Kansas', 'Louisiana', 'Texas'],
    },
    toastContent: (value: string, index: number) =>
      `Value: ${value}, Index：${index}`,
  },
});

const picker = ref();
const showPicker = ref(false);
const fieldValue = ref('');
const customFieldName = ref({
  text: 'cityName',
  children: 'cities',
});

const columns = computed(() => {
  const column = t('column3');
  return [
    {
      values: Object.keys(column),
      className: 'column1',
    },
    {
      values: column[Object.keys(column)[0]],
      className: 'column2',
      defaultIndex: 2,
    },
  ];
});

const onChange1 = (value: string, index: number) => {
  Toast(t('toastContent', value, index));
};

const onChange2 = (values: string[]) => {
  picker.value.setColumnValues(1, t('column3')[values[0]]);
};

const onConfirm = (value: string, index: number) => {
  Toast(t('toastContent', value, index));
};

const onCancel = () => Toast(t('cancel'));

const onCancel2 = () => {
  showPicker.value = false;
};

const onClickField = () => {
  showPicker.value = true;
};

const onConfirm2 = (value: string) => {
  showPicker.value = false;
  fieldValue.value = value;
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-picker
      :title="t('title')"
      :columns="t('textColumns')"
      @change="onChange1"
    />
  </demo-block>

  <demo-block card :title="t('defaultIndex')">
    <van-picker
      :title="t('title')"
      :columns="t('textColumns')"
      :default-index="2"
      @change="onChange1"
    />
  </demo-block>

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

  <demo-block card :title="t('setColumnValues')">
    <van-picker
      ref="picker"
      :title="t('title')"
      :columns="columns"
      @change="onChange2"
    />
  </demo-block>

  <demo-block card :title="t('loadingStatus')">
    <van-picker loading :title="t('title')" :columns="columns" />
  </demo-block>

  <demo-block card :title="t('withPopup')">
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      :label="t('city')"
      :placeholder="t('chooseCity')"
      @click="onClickField"
    />
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        :title="t('title')"
        :columns="t('textColumns')"
        @cancel="onCancel2"
        @confirm="onConfirm2"
      />
    </van-popup>
  </demo-block>
  <demo-block card :title="t('customChildrenKey')">
    <van-picker
      :title="t('title')"
      :columns="t('customChildrenColumns')"
      :columns-field-names="customFieldName"
    />
  </demo-block>
</template>
