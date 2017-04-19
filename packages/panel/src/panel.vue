<template>
  <div class="van-panel">
    <div class="van-panel__header">
      <slot name="header">
        <h4 class="van-panel__title" v-text="title"></h4>
        <span class="van-panel__desc" v-if="desc" v-text="desc"></span>
        <span class="van-panel__status" v-if="status" v-text="status"></span>
      </slot>
    </div>
    <div class="van-panel__content">
      <slot></slot>
    </div>
    <div class="van-panel__footer" v-if="this.$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'van-panel',
  props: {
    title: String,
    desc: String,
    status: String
  }
};
</script>
