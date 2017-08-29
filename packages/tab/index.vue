<template>
  <div class="van-tab__pane" :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'van-tab',
  props: {
    // 选项卡头显示文字
    title: {
      type: String,
      required: true
    },
    disabled: Boolean
  },
  data() {
    const nextIndex = this.$parent.tabs.length;
    this.$parent.tabs.push({
      title: this.title,
      disabled: this.disabled,
      index: nextIndex
    });

    return {
      key: nextIndex
    };
  },
  computed: {
    classNames() {
      return { 'van-tab__pane--select': this.key === this.$parent.curActive };
    }
  }
};
</script>
