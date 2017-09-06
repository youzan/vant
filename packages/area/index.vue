<template>
  <div class="van-area">
    <van-picker ref="picker" :columns="areaColumns" value-key="name" show-toolbar @change="handleAreaChange" @confirm="handleAreaConfirm" @cancel="handleAreaCancel"></van-picker>
  </div>
</template>

<script>
import Picker from '../picker';

const DEFAULT_PROVINCE = {
  code: '-1',
  name: '选择省份'
};

const DEFAULT_CITY = {
  code: '-1',
  name: '选择城市'
};

const DEFAULT_COUNTY = {
  code: '-1',
  name: '选择地区'
};

const PROVINCE_TYPE = 'provice';
const CITY_TYPE = 'city';
const COUNTY_TYPE = 'county';

export default {
  name: 'van-area',

  components: {
    [Picker.name]: Picker
  },

  props: {
    value: {},
    areaList: Object,
    /**
     * 省市县显示列数，3-省市县，2-省市，1-省
     */
    columnsNum: {
      type: [String, Number],
      default: 3
    }
  },

  computed: {
    areaColumns() {
      const areaList = this.areaList;

      if (!areaList || (areaList && typeof areaList.province_list !== 'object')) return [];

      const columns = [];
      const curValue = this.value || '';

      columns.push({
        values: [DEFAULT_PROVINCE].concat(this.computedAreaList(PROVINCE_TYPE)),
        className: 'van-area__province',
        defaultIndex: this.getAreaIndex(PROVINCE_TYPE, curValue)
      });

      const columnsNum = this.columnsNum;
      if (+columnsNum > 1) {
        columns.push({
          values: [DEFAULT_CITY].concat(this.computedAreaList(CITY_TYPE, curValue.slice(0, 2))),
          className: 'van-area__city',
          defaultIndex: this.getAreaIndex(CITY_TYPE, curValue)
        });
      }

      if (+columnsNum > 2) {
        columns.push({
          values: [DEFAULT_COUNTY].concat(this.computedAreaList(COUNTY_TYPE, curValue.slice(0, 4))),
          className: 'van-area__county',
          defaultIndex: this.getAreaIndex(COUNTY_TYPE, curValue)
        });
      }

      return columns;
    }
  },

  methods: {
    /**
     * 根据省市县类型和对应的`code`获取对应列表
     *
     * @param {string} type 省市县类型
     * @param {string} code 对应code
     */
    computedAreaList(type, code) {
      const result = [];
      const curAreaList = this.areaList;
      const areaList = type === PROVINCE_TYPE
        ? curAreaList.province_list
        : (type === CITY_TYPE ? curAreaList.city_list : curAreaList.county_list);

      for (const i in areaList) {
        // 如果为省类型直接插入，因为省那一列是全部显示的
        // 其他类型需要找到前缀相同的
        if (type === PROVINCE_TYPE || (code && i.slice(0, code.length) === code)) {
          result.push({
            code: i,
            name: areaList[i]
          });
        }
      }

      return result;
    },

    /**
     * 获取对应省市县在列表中的索引
     */
    getAreaIndex(type, code) {
      const compareNum = type === PROVINCE_TYPE
        ? 2
        : (type === CITY_TYPE ? 4 : 6);
      const areaList = this.computedAreaList(type, code.slice(0, compareNum - 2));

      for (let i = 0; i < areaList.length; i++) {
        if (+areaList[i].code.slice(0, compareNum) === +code.slice(0, compareNum)) {
          return i + 1;
        }
      }

      return 0;
    },

    handleAreaChange(picker, values, index) {
      const code = values[index].code;
      // 处理省变化
      if (index === 0) {
        picker.setColumnValues(
          1,
          [DEFAULT_CITY].concat(this.computedAreaList(CITY_TYPE, code.slice(0, 2)))
        );
        picker.setColumnValues(
          2,
          [DEFAULT_COUNTY].concat(this.computedAreaList(COUNTY_TYPE, code.slice(0, 4)))
        );
      } else if (index === 1) {
        picker.setColumnValues(
          2,
          [DEFAULT_COUNTY].concat(this.computedAreaList(COUNTY_TYPE, code.slice(0, 4)))
        );
      }
    },

    handleAreaConfirm(values) {
      this.$emit('confirm', values);
    },

    handleAreaCancel() {
      this.$emit('cancel');
    }
  }
};
</script>
