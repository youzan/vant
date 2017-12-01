<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-picker :columns="columns" @change="onChange" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-picker
        showToolbar
        :title="$t('area')"
        :columns="columns"
        @change="onChange"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      area: '地区选择',
      title2: '带 toolbar 的 Picker',
      column: {
        '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州'],
        '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩']
      }
    },
    'en-US': {
      area: 'Title',
      title2: 'Picker with toolbar',
      column: {
        'Group1': ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
        'Group2': ['Alabama', 'Kansas', 'Louisiana', 'Texas']
      }
    }
  },

  computed: {
    columns() {
      const column = this.$t('column');
      return [
        {
          values: Object.keys(column),
          className: 'column1'
        },
        {
          values: column[Object.keys(column)[0]],
          className: 'column2'
        }
      ];
    }
  },

  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, this.$t('column')[values[0]]);
    },
    onCancel() {
      Toast('picker cancel');
    },
    onConfirm() {
      Toast('picker confirm');
    }
  }
};
</script>
