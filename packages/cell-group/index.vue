<template>
  <div class="van-cell-group" :class="{ 'van-hairline--top-bottom': border }">
    <slot />
  </div>
</template>

<script>
import install from '../utils/install';

export default {
  install,

  name: 'cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
};
</script>
