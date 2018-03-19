<template>
  <div
    class="van-col"
    :class="{ [`van-col-${span}`]: span, [`van-col-offset-${offset}`]: offset}"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'col',

  props: {
    span: [Number, String],
    offset: [Number, String]
  },

  computed: {
    gutter() {
      return (this.$parent && Number(this.$parent.gutter)) || 0;
    },
    style() {
      const padding = `${this.gutter / 2}px`;
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {};
    }
  }
});
</script>
