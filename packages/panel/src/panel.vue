<template>
  <div class="z-panel">
    <div class="z-panel__header">
      <slot name="header">
        <h4 class="z-panel__title" v-text="title"></h4>
        <span class="z-panel__desc" v-if="desc" v-text="desc"></span>
        <span class="z-panel__status" v-if="status" v-text="status"></span>
      </slot>
    </div>
    <div class="z-panel__content">
      <slot></slot>
    </div>
    <div class="z-panel__footer" v-if="this.$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-panel',
  props: {
    title: String,
    desc: String,
    status: String
  }
};
</script>
