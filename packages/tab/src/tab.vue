<template>
  <div class="zan-tabs-pane" :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'zan-tab',
    props: {
      // 对应 Tabs 组件的 activeKey
      tabKey: {
        type: [Number, String],
        required: true
      },
      // 选项卡头显示文字
      title: {
        type: String,
        required: true
      },
      tabPaneClassName: {
        type: String
      }
    },
    computed: {
      classNames() {
        return [
          {'is-select': this.tabKey == this.$parent.switchActiveTabKey},
          this.tabPaneClassName
        ];
      }
    },
    created () {
      this.$parent.tabCreate(this.tabKey, this.title);
    }
  };
</script>
