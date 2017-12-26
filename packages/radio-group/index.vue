<template>
  <div class="van-radio-group">
    <slot />
  </div>
</template>

<script>
import { create } from '../utils';

export default create({
  name: 'van-radio-group',

  props: {
    value: {},
    disabled: Boolean
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    }
  }
});
</script>
