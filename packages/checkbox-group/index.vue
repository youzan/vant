<template>
  <div :class="b()">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'checkbox-group',

  props: {
    value: Array,
    disabled: Boolean,
    max: {
      default: 0,
      type: Number
    }
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  }
});
</script>
