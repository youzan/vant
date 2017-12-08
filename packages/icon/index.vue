<template>
  <i class="van-icon" :class="`van-icon-${name}`" v-on="$listeners">
    <slot></slot>
  </i>
</template>

<script>
import install from '../utils/install';

export default {
  install,
  name: 'van-icon',
  props: {
    name: String
  }
};
</script>
