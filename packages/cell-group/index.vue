<template>
  <div class="van-cell-group" :class="{ 'van-hairline--top-bottom': border }">
    <slot></slot>
  </div>
</template>

<script>
import { create } from '../utils';

export default create({
  name: 'van-cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
});
</script>
