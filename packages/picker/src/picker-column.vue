<template>
  <div class="z-picker-column">
    
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
      dragging: false
    };
  },

  watch: {
    values(val) {

    },

    currentValue(val) {
      this.$emit('change');
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
