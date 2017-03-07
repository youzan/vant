<template>
  <div
    :class="`${prefix}-row`"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'zan-row',
    props: {
      prefix: {
        type: String,
        default: 'zan'
      },
      gutter: [Number, String]
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
