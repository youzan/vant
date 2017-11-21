<template>
  <div class="van-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'van-radio-group',

  props: {
    value: {},
    disabled: Boolean
  },

  provide() {
    return {
      radioGroup: this
    };
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    }
  }
};
</script>
