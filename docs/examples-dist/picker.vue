<template><section class="demo-picker"><h1 class="demo-title">Picker 选择器</h1><example-block title="基础用法">
                <zan-picker :columns="pickerColumns" @change="handlePickerChange"></zan-picker>



              </example-block><example-block title="带toolbar的Picker">
                <zan-picker :columns="pickerColumns" show-toolbar="" @change="handlePickerChange" @cancel="handlePickerCancel" @confirm="handlePickerConfirm"></zan-picker>



              </example-block></section></template>

<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州']
};

export default {
  data() {
    return {
      pickerColumns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
          className: 'column2'
        }
      ]
    };
  },

  methods: {
    handlePickerChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    },
    handlePickerCancel() {
      alert('picker cancel');
    },
    handlePickerConfirm() {
      alert('picker confirm');
    }
  }
};
</script>