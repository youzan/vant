<template>
  <cell
    center
    :title="title"
    :border="border"
    :class="b()"
  >
    <van-switch
      v-bind="$props"
      @input="$emit('input', $event)"
    />
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
    value: null,
    title: String,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: null,
      default: true
    },
    inactiveValue: {
      type: null,
      default: false
    },
    size: {
      type: String,
      default: '24px'
    }
  },

  watch: {
    value() {
      this.$emit('change', this.value);
    }
  }
});
</script>
