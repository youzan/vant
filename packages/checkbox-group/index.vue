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
    max: Number,
    value: Array,
    disabled: Boolean
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  }
});
</script>
