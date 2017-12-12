<template>
  <div class="van-picker">
    <div class="van-picker__toolbar van-hairline--top-bottom" v-if="showToolbar">
      <slot>
        <div class="van-picker__cancel" @click="emit('cancel')">{{ $t('cancel') }}</div>
        <div class="van-picker__confirm" @click="emit('confirm')">{{ $t('confirm') }}</div>
        <div class="van-picker__title" v-if="title" v-text="title" />
      </slot>
    </div>
    <div class="van-picker__columns">
      <picker-column
        v-for="(item, index) in currentColumns"
        :key="index"
        :valueKey="valueKey"
        :options="item.values"
        :className="item.className"
        :defaultIndex="item.defaultIndex"
        :itemHeight="itemHeight"
        :visibileColumnCount="visibileColumnCount"
        @change="onChange(index)"
      />
    </div>
  </div>
</template>

<script>
import { create } from '../utils';
import PickerColumn from './PickerColumn';
import deepClone from '../utils/deep-clone';

export default create({
  name: 'van-picker',

  components: {
    PickerColumn
  },

  props: {
    title: String,
    valueKey: {
      type: String,
      default: 'text'
    },
    itemHeight: Number,
    showToolbar: Boolean,
    visibileColumnCount: Number,
    columns: {
      type: Array,
      default: () => []
    },
  },

  data() {
    return {
      children: [],
      currentColumns: []
    };
  },

  created() {
    this.initColumns();
  },

  watch: {
    columns() {
      this.initColumns();
    },
  },

  methods: {
    initColumns() {
      const columns = this.columns.map(deepClone);
      this.isSimpleColumn = columns.length && !columns[0].values;
      this.currentColumns = this.isSimpleColumn ? [{ values: columns }] : columns;
    },

    emit(event) {
      if (this.isSimpleColumn) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },

    onChange(columnIndex) {
      if (this.isSimpleColumn) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },

    // get column instance by index
    getColumn(index) {
      return this.children[index];
    },

    // get column value by index
    getColumnValue(index) {
      return (this.getColumn(index) || {}).currentValue;
    },

    // set column value by index
    setColumnValue(index, value) {
      const column = this.getColumn(index);
      column && column.setValue(value);
    },

    // get column option index by column index
    getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },

    // set column option index by column index
    setColumnIndex(columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },

    // get options of column by index
    getColumnValues(index) {
      return (this.currentColumns[index] || {}).values;
    },

    // set options of column by index
    setColumnValues(index, options) {
      const column = this.currentColumns[index];
      if (column) {
        column.values = options;
      }
    },

    // get values of all columns
    getValues() {
      return this.children.map(child => child.currentValue);
    },

    // set values of all columns
    setValues(values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value);
      });
    },

    // get indexes of all columns
    getIndexes() {
      return this.children.map(child => child.currentIndex);
    },

    // set indexes of all columns
    setIndexes(indexes) {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex);
      });
    }
  }
});
</script>
