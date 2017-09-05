<template>
  <div class="van-badge-group van-hairline--top-bottom">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'van-badge-group',

  props: {
    // 当前激活 tab 面板的 key
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  data() {
    return {
      badges: []
    };
  }
};
</script>
