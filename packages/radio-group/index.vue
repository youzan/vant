<template>
  <div class="van-radio-group">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'radio-group',

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
