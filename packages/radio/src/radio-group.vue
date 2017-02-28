<template>
  <div class="z-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'z-radio-group',

  props: {
    value: {},
    disabled: Boolean
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    }
  }
};
</script>
