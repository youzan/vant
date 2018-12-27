<template>
  <component
    :is="tag"
    :class="b({ [span]: span, [`offset-${offset}`]: offset })"
    :style="style"
  >
    <slot />
  </component>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'col',

  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
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
