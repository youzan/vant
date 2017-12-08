<template>
  <div class="van-row" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import { create } from '../utils';

export default create({
  name: 'van-row',

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
