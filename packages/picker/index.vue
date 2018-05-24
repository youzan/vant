<template>
  <div :class="b()">
    <div :class="b('toolbar')" class="van-hairline--top-bottom" v-if="showToolbar">
      <slot>
        <div :class="b('cancel')" @click="emit('cancel')">{{ cancelButtonText || $t('cancel') }}</div>
        <div :class="b('title')" class="van-ellipsis" v-if="title" v-text="title" />
        <div :class="b('confirm')" @click="emit('confirm')">{{ confirmButtonText || $t('confirm') }}</div>
      </slot>
    </div>
    <div v-if="loading" :class="b('loading')">
      <loading />
    </div>
    <div :class="b('columns')" :style="columnsStyle" @touchmove.prevent>
      <picker-column
        v-for="(item, index) in currentColumns"
        :key="index"
        :value-key="valueKey"
        :options="item.values"
        :class-name="item.className"
        :default-index="item.defaultIndex"
        :item-height="itemHeight"
        :visible-item-count="visibleItemCount"
        @change="onChange(index)"
      />
      <div :class="b('frame')" class="van-hairline--top-bottom" :style="frameStyle" />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import PickerColumn from './PickerColumn';
import deepClone from '../utils/deep-clone';

export default create({
  name: 'picker',

  components: {
    PickerColumn
  },

  props: {
    title: String,
    loading: Boolean,
    showToolbar: Boolean,
    confirmButtonText: String,
    cancelButtonText: String,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: {
      type: String,
      default: 'text'
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    columns: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      children: [],
      currentColumns: []
    };
  },

  watch: {
    columns: {
      handler() {
        const columns = this.columns.map(deepClone);
        this.isSimpleColumn = columns.length && !columns[0].values;
        this.currentColumns = this.isSimpleColumn ? [{ values: columns }] : columns;
      },
      immediate: true
    }
  },

  computed: {
    frameStyle() {
      return {
        height: this.itemHeight + 'px'
      };
    },

    columnsStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    }
  },

  methods: {
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
