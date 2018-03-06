<template>
  <div class="van-collapse-item van-hairline--top">
    <cell class="van-collapse-item__title" is-link @click="onClick">
      <slot name="title">{{ title }}</slot>
    </cell>
    <div class="van-collapse-item__content" v-show="expanded">
      <slot />
    </div>
  </div>
</template>

<script>
import Cell from '../cell';
import findParent from '../mixins/find-parent';
import { create } from '../utils';

export default create({
  name: 'van-collapse-item',

  mixins: [findParent],

  components: {
    Cell
  },

  props: {
    name: String,
    title: String
  },

  computed: {
    expanded() {
      const { activeNames } = this.parentGroup;
      return Array.isArray(activeNames)
        ? activeNames.some(name => name === this.name)
        : activeNames === this.name;
    }
  },

  created() {
    this.findParentByName('van-collapse');
    this.parentGroup.items.push(this);
  },

  destroyed() {
    this.parentGroup.items.splice(this.index, 1);
  },

  methods: {
    onClick() {
      this.parentGroup.switch(this.name, !this.expanded);
    }
  }
});
</script>
