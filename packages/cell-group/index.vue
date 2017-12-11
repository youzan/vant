<template>
  <div class="van-cell-group van-hairline--top-bottom">
    <slot></slot>
  </div>
</template>

<script>
import { create } from '../utils';

export default create({
  name: 'van-cell-group'
});
</script>
