<template>
  <component
    :is="tag"
    :class="b({
      flex,
      [`align-${align}`]: flex && align,
      [`justify-${justify}`]: flex && justify
    })"
    :style="style"
  >
    <slot />
  </component>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'row',

  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    flex() {
      return this.type === 'flex';
    },

    style() {
      const margin = `-${Number(this.gutter) / 2}px`;
      return this.gutter
        ? { marginLeft: margin, marginRight: margin }
        : {};
    }
  }
});
</script>
