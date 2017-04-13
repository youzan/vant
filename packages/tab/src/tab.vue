<template>
  <div class="zan-tab__pane" :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'zan-tab',
    props: {
      // 选项卡头显示文字
      title: {
        type: String,
        required: true
      },
      disabled: Boolean
    },
    beforeCreate() {
      this.$parent.tabs.push(this);
    },
    computed: {
      classNames() {
        return { 'zan-tab__pane--select': this.$parent.tabs.indexOf(this) === this.$parent.curActive };
      }
    }
  };
</script>
