<template>
  <cell :title="title" class="van-switch-cell">
    <van-switch v-bind="$props" @input="$emit('input', $event)" />
  </cell>
</template>

<script>
import Cell from '../cell';
import VanSwitch from '../switch';
import { create } from '../utils';

export default create({
  name: 'van-switch-cell',

  components: {
    Cell,
    VanSwitch
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
});
</script>
