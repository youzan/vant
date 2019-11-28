import { createNamespace } from '../utils';
import Picker from '../picker';
import { pickerProps } from '../picker/shared';

const [createComponent, bem] = createNamespace('area');

const COLUMNSPLACEHOLDERCODE = '000000';

function isOverseaCode(code) {
  return code[0] === '9';
}

export default createComponent({
  props: {
    ...pickerProps,
    value: String,
    areaList: {
      type: Object,
      default: () => ({})
    },
    columnsNum: {
      type: [Number, String],
      default: 3
    },
    isOverseaCode: {
      type: Function,
      default: isOverseaCode
    },
    columnsPlaceholder: {
      type: Array,
      default: () => []
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
    },

    typeToColumnsPlaceholder() {
      return {
        province: this.columnsPlaceholder[0] || '',
        city: this.columnsPlaceholder[1] || '',
        county: this.columnsPlaceholder[2] || '',
      };
    }
  },

  watch: {
    value() {
      this.code = this.value;
      this.setValues();
    },

    areaList: {
      deep: true,
      handler: 'setValues'
    },

    columnsNum() {
      this.$nextTick(() => {
        this.setValues();
      });
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
        if (this.isOverseaCode(code) && type === 'city') {
          code = '9';
        }

        result = result.filter(item => item.code.indexOf(code) === 0);
      }

      if (this.typeToColumnsPlaceholder[type] && result.length) {
        // set columns placeholder
        const codeFill = type === 'province' ? '' : type === 'city' ? COLUMNSPLACEHOLDERCODE.slice(2, 4) : COLUMNSPLACEHOLDERCODE.slice(4, 6);
        result.unshift({
          code: `${code}${codeFill}`,
          name: this.typeToColumnsPlaceholder[type]
        });
      }

      return result;
    },

    // get index by code
    getIndex(type, code) {
      let compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      const list = this.getList(type, code.slice(0, compareNum - 2));

      // oversea code
      if (this.isOverseaCode(code) && type === 'province') {
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

    // parse output columns data
    parseOutputValues(values) {
      return values.map((value, index) => {
        // save undefined value
        if (!value) return value;

        value = JSON.parse(JSON.stringify(value));
        if (!value.code || value.name === this.columnsPlaceholder[index]) {
          value.code = '';
          value.name = '';
        }
        return value;
      });
    },

    onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      let getValues = picker.getValues();
      getValues = this.parseOutputValues(getValues);
      this.$emit('change', picker, getValues, index);
    },

    onConfirm(values, index) {
      values = this.parseOutputValues(values);
      this.setValues();
      this.$emit('confirm', values, index);
    },

    setValues() {
      let { code } = this;

      if (!code) {
        if (this.columnsPlaceholder.length) {
          code = COLUMNSPLACEHOLDERCODE;
        } else if (Object.keys(this.county)[0]) {
          code = Object.keys(this.county)[0];
        } else {
          code = '';
        }
      }

      const { picker } = this.$refs;
      const province = this.getList('province');
      const city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00' && !this.isOverseaCode(code)) {
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
      const { picker } = this.$refs;
      let getValues = picker ? picker.getValues().filter(value => !!value) : [];
      getValues = this.parseOutputValues(getValues);
      return getValues;
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
      const filterCodeValues = values.filter(value => !!value.code);
      area.code = filterCodeValues.length ? filterCodeValues[filterCodeValues.length - 1].code : '';

      if (this.isOverseaCode(area.code)) {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    },

    reset(code) {
      this.code = code || '';
      this.setValues();
    }
  },

  render() {
    const on = {
      ...this.$listeners,
      change: this.onChange,
      confirm: this.onConfirm
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
        swipeDuration={this.swipeDuration}
        visibleItemCount={this.visibleItemCount}
        cancelButtonText={this.cancelButtonText}
        confirmButtonText={this.confirmButtonText}
        {...{ on }}
      />
    );
  }
});
