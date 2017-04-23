<template>
  <div
    :class="[
      `${prefix}-col`,
      {
        [`${prefix}-col-${span}`]: span,
        [`${prefix}-col-offset-${offset}`]: offset,
      }
    ]"
    :style="style">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'van-col',
    props: {
      span: [Number, String],
      offset: [Number, String],
      prefix: {
        type: String,
        default: 'van'
      }
    },
    computed: {
      gutter() {
        if (!this.$parent) return 0;
        return Number(this.$parent.gutter) || 0;
      },
      style() {
        const padding = `${this.gutter / 2}px`;
        return this.gutter
          ? { paddingLeft: padding, paddingRight: padding }
          : null;
      }
    }
  };
</script>
