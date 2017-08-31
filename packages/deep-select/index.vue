<template>
  <div class="van-deep-select" v-bind:style="{ height: mainHeight + 'px' }">
    <div class="van-deep-select__nav">
      <div
        v-for="(item, index) in items"
        class="van-deep-select__nitem"
        v-bind:class="{ 'van-deep-select__nitem--active': mainActiveIndex === index }"
        @click="onNavClick(index)">
        {{ item.text }}
      </div>
    </div>
    <div class="van-deep-select__content" v-bind:style="{ height: itemHeight + 'px' }">
      <div
        v-for="item in subItems"
        :key="item.id"
        class="van-deep-select__item"
        v-bind:class="{ 'van-deep-select__item--active': activeId === item.id }"
        @click="onItemSelect(item)">
        {{ item.text }}
        <van-icon
          v-if="activeId === item.id"
          name="success"
          class="van-deep-select__selected"
        ></van-icon>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Icon
} from 'packages/icon';

export default {
  name: 'van-deep-select',

  components: {
    'van-icon': Icon
  },

  props: {
    items: {
      type: Array,
      default () {
        return [];
      }
    },
    mainActiveIndex: {
      type: Number,
      default: 0
    },
    activeId: {
      type: Number,
      default: 0
    },
    maxHeight: {
      type: Number,
      default: 300
    }
  },

  computed: {
    subItems() {
      const selectedItem = this.items[this.mainActiveIndex] || {};
      return selectedItem.children || [];
    },
    mainHeight() {
      const maxHeight = Math.max(this.items.length * 44, this.subItems.length * 44);
      return Math.min(maxHeight, this.maxHeight);
    },
    itemHeight() {
      return Math.min(this.subItems.length * 44, this.maxHeight);
    }
  },

  methods: {
    onNavClick(index) {
      this.$emit('navclick', index);
    },
    onItemSelect(data) {
      const exportData = Object.assign({}, data);
      this.$emit('itemclick', exportData);
    }
  }
};
</script>
