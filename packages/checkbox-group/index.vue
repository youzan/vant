<template>
  <div class="van-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import { create } from '../utils';

export default create({
  name: 'van-checkbox-group',

  props: {
    value: {},
    disabled: Boolean
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  }
});
</script>
