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
      disable: Boolean
    },
    computed: {
      classNames() {
        return { 'zan-tab__pane--select': this.$parent.tabs.indexOf(this) === this.$parent.switchActiveTabKey };
      }
    },
    created() {
      this.$parent.tabs.push(this);
    }
  };
</script>
