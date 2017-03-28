<template>
  <div class="zan-picker">
    <div class="zan-picker__toolbar" v-show="showToolbar">
      <slot>
        <a href="javascript:void(0)" class="zan-picker__cancel" @click="handlePickerCancel">取消</a>
        <a href="javascript:void(0)" class="zan-picker__confirm" @click="handlePickerConfirm">完成</a>
      </slot>
    </div>
    <div class="zan-picker__columns" :class="['zan-picker__columns--' + columns.length]">
      <picker-column
        v-for="(item, index) in columns"
        v-model="values[index]"
        :values="item.values"
        :class-name="item.className"
        :itemHeight="itemHeight"
        :visible-item-count="visibleItemCount"
        :value-key="valueKey"
        @columnChange="columnValueChange(index)">
      </picker-column>
      <div class="zan-picker-center-highlight" :style="{ height: itemHeight + 'px', marginTop: -itemHeight / 2 + 'px' }"></div>
    </div>
  </div>
</template>

<script>
import PickerColumn from './picker-column';

const DEFAULT_ITEM_HEIGHT = 44;

export default {
  name: 'zan-picker',

  components: {
    PickerColumn
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
      const children = this.$children.filter(child => child.$options.name === 'zan-picker-column');
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
