<template>
  <div
    :class="`${prefix}-row`"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'van-row',
    props: {
      prefix: {
        type: String,
        default: 'van'
      },
      gutter: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      style() {
        const gutter = Number(this.gutter);
        const margin = `-${gutter / 2}px`;
        return gutter
          ? { marginLeft: margin, marginRight: margin }
          : {};
      }
    }
  };
</script>
