<template>
  <o2-cell
    class="o2-radio"
    :class="{
      'is-disabled': disabled
    }">
  </o2-cell>
</template>

<script>
import O2Cell from 'packages/cell';

export default {
  name: 'o2-radio',

  components: {
    O2Cell
  },

  props: {
    disabled: Boolean,
    value: {}
  },

  created() {
  }
};
</script>
