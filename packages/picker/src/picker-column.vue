<template>
  <div class="z-picker-column">
    <div class="z-picker-column-wrapper">
      <div class="z-picker-item">
        
      </div>
    </div>
  </div>
</template>

<script>
const DEFAULT_ITEM_HEIGHT = 44;

export default {
  name: 'z-picker-column',

  props: {
    /**
     * 每一列可见备选元素的个数
     */
    visibileColumnCount: {
      type: Number,
      default: 5
    },
    values: {
      type: Array,
      default() {
        return [];
      }
    },
    className: {},
    itemHeight: {
      type: Number,
      default: DEFAULT_ITEM_HEIGHT
    },
    value: {}
  },

  data() {
    return {
      currentValue: this.value,
      currentValues: this.values,
      dragging: false
    };
  },

  watch: {
    values(val) {
      this.currentValue = val;
    },

    currentValues(val) {

    },

    currentValue(val) {
      this.$emit('change', this);
    }
  },

  computed: {
    /**
     * picker可见备选元素总高度
     */
    visibleContentHeight() {
      return this.itemHeight * this.visibileColumnCount;
    }
  },

  methods: {

  }
};
</script>
