<template>
  <div class="zan-tabs-pane" :class="classNames">
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
        return { 'is-select': this.$parent.tabs.indexOf(this) === this.$parent.switchActiveTabKey };
      }
    },
    created() {
      this.$parent.tabs.push(this);
    }
  };
</script>
