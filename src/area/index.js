import { createNamespace } from '../utils';
import { pickerProps } from '../picker/shared';
import Picker from '../picker';

const [createComponent, bem] = createNamespace('area');

const PLACEHOLDER_CODE = '000000';

function isOverseaCode(code) {
  return code[0] === '9';
}

function pickSlots(instance, keys) {
  const { $slots, $scopedSlots } = instance;
  const scopedSlots = {};

  keys.forEach((key) => {
    if ($scopedSlots[key]) {
      scopedSlots[key] = $scopedSlots[key];
    } else if ($slots[key]) {
      scopedSlots[key] = () => $slots[key];
    }
  });

  return scopedSlots;
}

export default createComponent({
  props: {
    ...pickerProps,
    value: String,
    areaList: {
      type: Object,
      default: () => ({}),
    },
    columnsNum: {
      type: [Number, String],
      default: 3,
    },
    isOverseaCode: {
      type: Function,
      default: isOverseaCode,
    },
    columnsPlaceholder: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      code: this.value,
      columns: [{ values: [] }, { values: [] }, { values: [] }],
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

    placeholderMap() {
      return {
        province: this.columnsPlaceholder[0] || '',
        city: this.columnsPlaceholder[1] || '',
        county: this.columnsPlaceholder[2] || '',
      };
    },
  },

  watch: {
    value(val) {
      this.code = val;
      this.setValues();
    },

    areaList: {
      deep: true,
      handler: 'setValues',
    },

    columnsNum() {
      this.$nextTick(() => {
        this.setValues();
      });
    },
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
      result = Object.keys(list).map((listCode) => ({
        code: listCode,
        name: list[listCode],
      }));

      if (code) {
        // oversea code
        if (this.isOverseaCode(code) && type === 'city') {
          code = '9';
        }

        result = result.filter((item) => item.code.indexOf(code) === 0);
      }

      if (this.placeholderMap[type] && result.length) {
        // set columns placeholder
        let codeFill = '';
        if (type === 'city') {
          codeFill = PLACEHOLDER_CODE.slice(2, 4);
        } else if (type === 'county') {
          codeFill = PLACEHOLDER_CODE.slice(4, 6);
        }

        result.unshift({
          code: `${code}${codeFill}`,
          name: this.placeholderMap[type],
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

      const parsedValues = this.parseOutputValues(picker.getValues());
      this.$emit('change', picker, parsedValues, index);
    },

    onConfirm(values, index) {
      values = this.parseOutputValues(values);
      this.setValues();
      this.$emit('confirm', values, index);
    },

    getDefaultCode() {
      if (this.columnsPlaceholder.length) {
        return PLACEHOLDER_CODE;
      }

      const countyCodes = Object.keys(this.county);
      if (countyCodes[0]) {
        return countyCodes[0];
      }

      const cityCodes = Object.keys(this.city);
      if (cityCodes[0]) {
        return cityCodes[0];
      }

      return '';
    },

    setValues() {
      let { code } = this;

      if (!code) {
        code = this.getDefaultCode();
      }

      const { picker } = this.$refs;
      const province = this.getList('province');
      const city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (
        city.length &&
        code.slice(2, 4) === '00' &&
        !this.isOverseaCode(code)
      ) {
        [{ code }] = city;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([
        this.getIndex('province', code),
        this.getIndex('city', code),
        this.getIndex('county', code),
      ]);
    },

    getValues() {
      const { picker } = this.$refs;
      let getValues = picker
        ? picker.getValues().filter((value) => !!value)
        : [];
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
        county: '',
      };

      if (!values.length) {
        return area;
      }

      const names = values.map((item) => item.name);
      const validValues = values.filter((value) => !!value.code);

      area.code = validValues.length
        ? validValues[validValues.length - 1].code
        : '';

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

    // @exposed-api
    reset(code) {
      this.code = code || '';
      this.setValues();
    },
  },

  render() {
    const on = {
      ...this.$listeners,
      change: this.onChange,
      confirm: this.onConfirm,
    };

    return (
      <Picker
        ref="picker"
        class={bem()}
        showToolbar
        valueKey="name"
        title={this.title}
        columns={this.displayColumns}
        loading={this.loading}
        readonly={this.readonly}
        itemHeight={this.itemHeight}
        swipeDuration={this.swipeDuration}
        visibleItemCount={this.visibleItemCount}
        cancelButtonText={this.cancelButtonText}
        confirmButtonText={this.confirmButtonText}
        scopedSlots={pickSlots(this, [
          'title',
          'columns-top',
          'columns-bottom',
        ])}
        {...{ on }}
      />
    );
  },
});
