<template>
  <div
    :class="b()"
    :style="{ height: height + 'px' }"
  >
    <div :class="b('nav')">
      <div
        v-for="(item, index) in items"
        class="van-ellipsis"
        :class="b('nitem', { active: mainActiveIndex === index, disabled: item.disabled })"
        @click="onClickNav(item, index)"
      >
        {{ item.text }}
      </div>
    </div>
    <div :class="b('content')">
      <div
        v-for="item in subItems"
        :key="item.id"
        class="van-ellipsis"
        :class="b('item', {
          active: activeId === item.id,
          disabled: item.disabled
        })"
        @click="onItemSelect(item)"
      >
        {{ item.text }}
        <icon
          v-if="activeId === item.id"
          name="checked"
          size="16px"
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
    items: Array,
    mainActiveIndex: Number,
    activeId: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: Number,
      default: 300
    }
  },

  computed: {
    subItems() {
      const selectedItem = this.items[this.mainActiveIndex] || {};
      return selectedItem.children || [];
    }
  },

  methods: {
    onClickNav(data, index) {
      if (!data.disabled) {
        this.$emit('navclick', index);
      }
    },

    onItemSelect(data) {
      if (!data.disabled) {
        this.$emit('itemclick', data);
      }
    }
  }
});
</script>
