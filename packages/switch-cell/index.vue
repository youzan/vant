<template>
  <cell :title="title" :border="border" class="van-switch-cell">
    <van-switch v-bind="$props" @input="$emit('input', $event)" />
  </cell>
</template>

<script>
import VanSwitch from '../switch';
import create from '../utils/create';

export default create({
  name: 'switch-cell',

  components: {
    VanSwitch
  },

  props: {
    title: String,
    value: Boolean,
    border: Boolean,
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
