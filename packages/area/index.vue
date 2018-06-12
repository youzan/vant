<template>
  <picker
    ref="picker"
    :class="b()"
    show-toolbar
    value-key="name"
    :title="title"
    :loading="loading"
    :columns="columns"
    :item-height="itemHeight"
    :visible-item-count="visibleItemCount"
    @change="onChange"
    @confirm="$emit('confirm', $event)"
    @cancel="$emit('cancel', $event)"
  />
</template>

<script>
import create from '../utils/create';
import Picker from '../picker';
import { isObj } from '../utils';

export default create({
  name: 'area',

  components: {
    Picker
  },

  props: {
    value: String,
    title: String,
    loading: Boolean,
    areaList: Object,
    itemHeight: Number,
    visibleItemCount: Number,
    columnsNum: {
      type: [String, Number],
      default: 3
    }
  },

  computed: {
    listValid() {
      return this.areaList && isObj(this.areaList.province_list);
    },

    columns() {
      if (!this.listValid) {
        return [];
      }

      const code = this.getCode();
      return [
        { values: this.getList('province') },
        { values: this.getList('city', code.slice(0, 2)) },
        { values: this.getList('county', code.slice(0, 4)) }
      ].slice(0, +this.columnsNum);
    }
  },

  watch: {
    columns: {
      handler() {
        this.$nextTick(this.setIndex);
      },
      immediate: true
    }
  },

  methods: {
    setIndex() {
      const code = this.getCode();
      this.$refs.picker && this.$refs.picker.setIndexes([
        this.getIndex('province', code),
        this.getIndex('city', code),
        this.getIndex('county', code)
      ]);
    },

    getCode() {
      return (
        this.value ||
        (this.listValid && Object.keys(this.areaList.county_list)[0]) ||
        ''
      );
    },

    // get list by code
    getList(type, code) {
      let result = [];
      if (!this.listValid || (type !== 'province' && !code)) {
        return result;
      }

      const list = this.areaList[`${type}_list`];
      result = Object.keys(list).map(code => ({
        code,
        name: list[code]
      }));

      if (code) {
        result = result.filter(item => item.code.indexOf(code) === 0);
      }

      return result;
    },

    // get index by code
    getIndex(type, code) {
      const compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      const list = this.getList(type, code.slice(0, compareNum - 2));
      code = code.slice(0, compareNum);

      for (let i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },

    onChange(picker, values, index) {
      let code = values[index].code;

      if (index === 0) {
        const cityList = this.getList('city', code.slice(0, 2));
        picker.setColumnValues(1, cityList);
        code = cityList[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      this.$emit('change', picker, values, index);
    },

    getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues() : [];
    }
  }
});
</script>
