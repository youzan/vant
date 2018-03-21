<template>
  <div
    class="van-collapse-item"
    :class="{
      'van-hairline--top': index,
      'van-collapse-item--expanded': expanded
    }"
  >
    <cell class="van-collapse-item__title" is-link @click="onClick">
      <slot name="title">{{ title }}</slot>
    </cell>
    <div class="van-collapse-item__content" v-show="expanded">
      <slot />
    </div>
  </div>
</template>

<script>
import findParent from '../mixins/find-parent';
import create from '../utils/create';
import { isDef } from '../utils';

export default create({
  name: 'collapse-item',

  mixins: [findParent],

  props: {
    name: [String, Number],
    title: String
  },

  computed: {
    items() {
      return this.parentGroup.items;
    },

    index() {
      return this.items.indexOf(this);
    },

    currentName() {
      return isDef(this.name) ? this.name : this.index;
    },

    expanded() {
      const { activeNames } = this.parentGroup;
      return this.parentGroup.accordion
        ? activeNames === this.currentName
        : activeNames.some(name => name === this.currentName);
    }
  },

  created() {
    this.findParentByName('van-collapse');
    this.items.push(this);
  },

  destroyed() {
    this.items.splice(this.index, 1);
  },

  methods: {
    onClick() {
      const { parentGroup } = this;
      const name = parentGroup.accordion && this.currentName === parentGroup.activeNames ? '' : this.currentName;
      this.parentGroup.switch(name, !this.expanded);
    }
  }
});
</script>
