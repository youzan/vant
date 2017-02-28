<template>
  <div class="zan-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zan-radio-group',

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
