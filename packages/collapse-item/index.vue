<template>
  <div
    :class="[
      b({ expanded }),
      { 'van-hairline--top': index }
    ]"
  >
    <cell :class="b('title')" is-link @click="onClick">
      <slot name="title">{{ title }}</slot>
    </cell>
    <div v-show="expanded" :class="b('content')">
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
      return this.parent.items;
    },

    index() {
      return this.items.indexOf(this);
    },

    currentName() {
      return isDef(this.name) ? this.name : this.index;
    },

    expanded() {
      const { value } = this.parent;
      return this.parent.accordion
        ? value === this.currentName
        : value.some(name => name === this.currentName);
    }
  },

  created() {
    this.findParent('van-collapse');
    this.items.push(this);
  },

  destroyed() {
    this.items.splice(this.index, 1);
  },

  methods: {
    onClick() {
      const { parent } = this;
      const name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    }
  }
});
</script>
