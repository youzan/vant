<template>
  <div class="van-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'van-checkbox-group',

  props: {
    value: {},
    disabled: Boolean
  },

  provide() {
    return {
      checkboxGroup: this
    };
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  }
};
</script>
