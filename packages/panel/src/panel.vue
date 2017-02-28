<template>
  <div class="zan-panel">
    <div class="zan-panel__header">
      <slot name="header">
        <h4 class="zan-panel__title" v-text="title"></h4>
        <span class="zan-panel__desc" v-if="desc" v-text="desc"></span>
        <span class="zan-panel__status" v-if="status" v-text="status"></span>
      </slot>
    </div>
    <div class="zan-panel__content">
      <slot></slot>
    </div>
    <div class="zan-panel__footer" v-if="this.$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zan-panel',
  props: {
    title: String,
    desc: String,
    status: String
  }
};
</script>
