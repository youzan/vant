<template>
  <div class="zan-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zan-checkbox-group',

  props: {
    value: {},
    disabled: Boolean
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  }
};
</script>
