<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-picker
        show-toolbar
        :title="t('title')"
        :columns="t('textColumns')"
        @change="onChange1"
      />
    </demo-block>

    <demo-block :title="t('defaultIndex')">
      <van-picker
        show-toolbar
        :title="t('title')"
        :columns="t('textColumns')"
        :default-index="2"
        @change="onChange1"
      />
    </demo-block>

    <demo-block :title="t('multipleColumns')">
      <van-picker
        show-toolbar
        :title="t('title')"
        :columns="t('dateColumns')"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('cascade')">
      <van-picker
        show-toolbar
        :title="t('title')"
        :columns="t('cascadeColumns')"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </demo-block>

    <demo-block :title="t('disableOption')">
      <van-picker
        show-toolbar
        :title="t('title')"
        :columns="t('disabledColumns')"
      />
    </demo-block>

    <demo-block :title="t('setColumnValues')">
      <van-picker
        show-toolbar
        :title="t('title')"
        :columns="columns"
        @change="onChange2"
      />
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <van-picker loading show-toolbar :title="t('title')" :columns="columns" />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('withPopup')">
      <van-field
        readonly
        clickable
        :label="t('city')"
        :value="fieldValue"
        :placeholder="t('chooseCity')"
        @click="onClickField"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :title="t('title')"
          :columns="t('textColumns')"
          @cancel="onCancel2"
          @confirm="onConfirm2"
        />
      </van-popup>
    </demo-block>
  </demo-section>
</template>

<script>
import { dateColumns, cascadeColumns } from './data';

export default {
  i18n: {
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
      textColumns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      disabledColumns: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' },
      ],
      column3: {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州'],
      },
      toastContent: (value, index) => `当前值：${value}, 当前索引：${index}`,
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
      toastContent: (value, index) => `Value: ${value}, Index：${index}`,
    },
  },

  data() {
    return {
      showPicker: false,
      fieldValue: '',
    };
  },

  computed: {
    columns() {
      const column = this.t('column3');
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
    },
  },

  methods: {
    onChange1(picker, value, index) {
      this.$toast(this.t('toastContent', value, index));
    },

    onChange2(picker, values) {
      picker.setColumnValues(1, this.t('column3')[values[0]]);
    },

    onConfirm(value, index) {
      this.$toast(this.t('toastContent', value, index));
    },

    onCancel() {
      this.$toast(this.t('cancel'));
    },

    onClickField() {
      this.showPicker = true;
    },

    onConfirm2(value) {
      this.showPicker = false;
      this.fieldValue = value;
    },

    onCancel2() {
      this.showPicker = false;
    },
  },
};
</script>
