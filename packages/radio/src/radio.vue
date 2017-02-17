<template>
  <z-cell
    class="z-radio"
    :class="{
      'is-disabled': disabled
    }">
  </z-cell>
</template>

<script>
import zCell from 'packages/cell';

export default {
  name: 'z-radio',

  components: {
    zCell
  },

  props: {
    disabled: Boolean,
    value: {}
  },

  created() {
  }
};
</script>
