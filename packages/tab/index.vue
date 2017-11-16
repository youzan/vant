<template>
  <div :class="['van-tab__pane', { 'van-tab__pane--select': key === $parent.curActive }]">
    <slot></slot>
  </div>
</template>

<script>
import findParent from '../mixins/find-parent';

export default {
  name: 'van-tab',

  mixins: [findParent],

  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean
  },

  data() {
    this.findParentByName('van-tabs');
    const nextIndex = this.parentGroup.tabs.length;
    this.updateParentData(nextIndex);
    return {
      key: nextIndex
    };
  },

  watch: {
    title() {
      this.updateParentData();
    },
    disabled() {
      this.updateParentData();
    }
  },

  methods: {
    updateParentData(nextIndex) {
      const index = arguments.length ? nextIndex : this.key;
      this.parentGroup.tabs.splice(index, 1, {
        title: this.title,
        disabled: this.disabled,
        index
      });
    }
  },

  destroyed() {
    const key = this.key;
    const tabs = this.parentGroup.tabs;

    for (let i = 0; i < tabs.length; i++) {
      /* istanbul ignore else */
      if (tabs[i].index === key) {
        this.parentGroup.tabs.splice(i, 1);
        return;
      }
    }
  }
};
</script>
