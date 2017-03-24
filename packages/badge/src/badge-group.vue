<template>
  <div class="zan-badge-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'zan-badge-group',

    props: {
      // 当前激活 tab 面板的 key
      activeKey: {
        type: [Number, String],
        default: 0
      }
    }
  };
</script>
