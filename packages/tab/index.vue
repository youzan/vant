<template>
  <div :class="['van-tab__pane', { 'van-tab__pane--select': key === $parent.curActive }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'van-tab',

  inject: ['tabs'],

  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean
  },

  data() {
    const nextIndex = this.tabs.tabs.length;
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
      this.tabs.tabs.splice(index, 1, {
        title: this.title,
        disabled: this.disabled,
        index
      });
    }
  },

  destroyed() {
    const { key } = this;
    const { tabs } = this.tabs;

    for (let i = 0; i < tabs.length; i++) {
      /* istanbul ignore else */
      if (tabs[i].index === key) {
        return tabs.splice(i, 1);
      }
    }
  }
};
</script>
