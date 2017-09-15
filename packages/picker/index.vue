<template>
  <div class="van-picker">
    <div class="van-picker__toolbar van-hairline--top-bottom" v-show="showToolbar">
      <slot>
        <a href="javascript:void(0)" class="van-picker__cancel" @click="handlePickerCancel">取消</a>
        <a href="javascript:void(0)" class="van-picker__confirm" @click="handlePickerConfirm">完成</a>
        <div v-if="title" class="van-picker__title">{{ title }}</div>
      </slot>
    </div>
    <div class="van-picker__columns" :class="['van-picker__columns--' + columns.length]">
      <van-picker-column
        v-for="(item, index) in columns"
        :key="index"
        v-model="values[index]"
        :values="item.values"
        :class-name="item.className"
        :itemHeight="itemHeight"
        :visible-item-count="visibileColumnCount"
        :value-key="valueKey"
        @columnChange="columnValueChange(index)"
      />
      <div class="van-picker-center-highlight" :style="{ height: itemHeight + 'px', marginTop: -itemHeight / 2 + 'px' }"></div>
    </div>
  </div>
</template>

<script>
import PickerColumn from './picker-column';

const DEFAULT_ITEM_HEIGHT = 44;

export default {
  name: 'van-picker',

  components: {
    [PickerColumn.name]: PickerColumn
  },

  props: {
    /**
     * 每一列可见备选元素的个数
     */
    visibileColumnCount: {
      type: Number,
      default: 5
    },
    /**
     * 选中元素区高度
     */
    itemHeight: {
      type: Number,
      default: DEFAULT_ITEM_HEIGHT
    },
    /**
     * 对象数组，配置每一列显示的数据
     */
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 否在组件顶部显示一个toolbar
     */
    showToolbar: {
      type: Boolean,
      default: false
    },
    /**
     * 顶部toolbar 显示的title
     */
    title: String,
    valueKey: String
  },

  computed: {
    values() {
      const columns = this.columns || [];
      const values = [];

      columns.forEach(column => {
        values.push(column.value || column.values[column.defaultIndex || 0]);
      });

      return values;
    }
  },

  methods: {
    handlePickerCancel() {
      this.$emit('cancel', this.values);
    },
    handlePickerConfirm() {
      this.$emit('confirm', this.values);
    },
    /**
     * 处理列`change`事件
     */
    columnValueChange(index) {
      this.$emit('change', this, this.values, index);
    },

    /**
     * 获取对应索引的列的实例
     */
    getColumn(index) {
      const children = this.$children.filter(child => child.$options.name === 'van-picker-column');
      return children[index];
    },

    /**
     * 获取对应列中选中的值
     */
    getColumnValue(index) {
      const column = this.getColumn(index);
      return column && column.values[column.valueIndex];
    },

    /**
     * 设置对应列中选中的值
     */
    setColumnValue(index, value) {
      const column = this.getColumn(index);
      if (column) {
        column.currentValue = value;
      }
    },

    /**
     * 获取对应列中所有的备选值
     */
    getColumnValues(index) {
      const column = this.getColumn(index);
      return column && column.currentValues;
    },

    /**
     * 设置对应列中所有的备选值
     */
    setColumnValues(index, values) {
      const column = this.getColumn(index);
      if (column) {
        column.currentValues = values;
      }
    },

    /**
     * 获取所有列中被选中的值，返回一个数组
     */
    getValues() {
      return this.values;
    },

    /**
     * `values`为一个数组，设置所有列中被选中的值
     */
    setValues(values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value);
      });
    }
  }
};
</script>
