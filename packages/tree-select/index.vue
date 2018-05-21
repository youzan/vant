<template>
  <div :class="b()" :style="{ height: mainHeight + 'px' }">
    <div :class="b('nav')">
      <div
        v-for="(item, index) in items"
        class="van-ellipsis"
        :class="b('nitem', { active: mainActiveIndex === index })"
        @click="$emit('navclick', index)">
        {{ item.text }}
      </div>
    </div>
    <div :class="b('content')" :style="{ height: itemHeight + 'px' }">
      <div
        v-for="item in subItems"
        :key="item.id"
        class="van-ellipsis"
        :class="b('item', { active: activeId === item.id })"
        @click="onItemSelect(item)">
        {{ item.text }}
        <icon
          v-if="activeId === item.id"
          name="success"
          :class="b('selected')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'tree-select',

  props: {
    items: {
      type: Array,
      default: () => []
    },
    mainActiveIndex: {
      type: Number,
      default: 0
    },
    activeId: {
      type: [Number, String],
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
    onItemSelect(data) {
      this.$emit('itemclick', { ...data });
    }
  }
});
</script>
