<template>
  <div :class="b()" :style="style">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'row',

  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    style() {
      const margin = `-${Number(this.gutter) / 2}px`;
      return this.gutter
        ? { marginLeft: margin, marginRight: margin }
        : {};
    }
  }
});
</script>
