<template>
  <div class="page-picker">
    <h1 class="page-title">Picker</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <z-picker :columns="pickerColumns" @change="handlePickerChange"></z-picker>
  </div>  
</template>

<script>
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
    }
  }
};
</script>
