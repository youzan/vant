<template>
  <van-cell :title="title" class="van-switch-cell">
    <van-switch :value="value" @input="$emit('input', $event)" :disabled="disabled" :loading="loading" />
  </van-cell>
</template>

<script>
import Cell from '../cell';
import Switch from '../switch';

export default {
  name: 'van-switch-cell',

  components: {
    [Cell.name]: Cell,
    [Switch.name]: Switch
  },

  props: {
    title: String,
    value: Boolean,
    loading: Boolean,
    disabled: Boolean
  },

  watch: {
    value() {
      this.$emit('change', this.value);
    }
  }
};
</script>
