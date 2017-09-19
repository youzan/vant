<template>
  <div class="van-panel van-hairline--top-bottom">
    <div class="van-panel__header van-hairline--bottom">
      <slot name="header">
        <div class="van-panel__title" v-text="title"></div>
        <span class="van-panel__desc" v-if="desc" v-text="desc"></span>
        <span class="van-panel__status" v-if="status" v-text="status"></span>
      </slot>
    </div>
    <div class="van-panel__content">
      <slot></slot>
    </div>
    <div class="van-panel__footer van-hairline--top" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'van-panel',
  props: {
    desc: String,
    title: String,
    status: String
  }
};
</script>
