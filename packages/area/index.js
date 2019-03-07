import { use } from '../utils';
import Picker from '../picker';
import { pickerProps } from '../picker/shared';

const [sfc, bem] = use('area');

export default sfc({
  props: {
    ...pickerProps,
    value: String,
    areaList: {
      type: Object,
      default: () => ({})
    },
    columnsNum: {
      type: [String, Number],
      default: 3
    }
  },

  data() {
    return {
      code: this.value,
      columns: [{ values: [] }, { values: [] }, { values: [] }]
    };
  },

  computed: {
    province() {
      return this.areaList.province_list || {};
    },

    city() {
      return this.areaList.city_list || {};
    },

    county() {
      return this.areaList.county_list || {};
    },

    displayColumns() {
      return this.columns.slice(0, +this.columnsNum);
    }
  },

  watch: {
    value() {
      this.code = this.value;
      this.setValues();
    },

    areaList: {
      deep: true,
      handler() {
        this.setValues();
      }
    }
  },

  mounted() {
    this.setValues();
  },

  methods: {
    // get list by code
    getList(type, code) {
      let result = [];
      if (type !== 'province' && !code) {
        return result;
      }

      const list = this[type];
      result = Object.keys(list).map(listCode => ({
        code: listCode,
        name: list[listCode]
      }));

      if (code) {
        // oversea code
        if (code[0] === '9' && type === 'city') {
          code = '9';
        }

        result = result.filter(item => item.code.indexOf(code) === 0);
      }

      return result;
    },

    // get index by code
    getIndex(type, code) {
      let compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      const list = this.getList(type, code.slice(0, compareNum - 2));

      // oversea code
      if (code[0] === '9' && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);
      for (let i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },

    onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      this.$emit('change', picker, values, index);
    },

    setValues() {
      let code = this.code || Object.keys(this.county)[0] || '';
      const { picker } = this.$refs;
      const province = this.getList('province');
      const city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00') {
        [{ code }] = city;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([
        this.getIndex('province', code),
        this.getIndex('city', code),
        this.getIndex('county', code)
      ]);
    },

    getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues().filter(value => !!value) : [];
    },

    getArea() {
      const values = this.getValues();
      const area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: ''
      };

      if (!values.length) {
        return area;
      }

      const names = values.map(item => item.name);

      area.code = values[values.length - 1].code;
      if (area.code[0] === '9') {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    },

    reset() {
      this.code = '';
      this.setValues();
    }
  },

  render(h) {
    const on = {
      ...this.$listeners,
      change: this.onChange
    };

    return (
      <Picker
        ref="picker"
        class={bem()}
        showToolbar
        valueKey="name"
        title={this.title}
        loading={this.loading}
        columns={this.displayColumns}
        itemHeight={this.itemHeight}
        visibleItemCount={this.visibleItemCount}
        cancelButtonText={this.cancelButtonText}
        confirmButtonText={this.confirmButtonText}
        {...{ on }}
      />
    );
  }
});
