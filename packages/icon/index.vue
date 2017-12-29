<template>
  <i class="van-icon" :class="`van-icon-${name}`" v-on="$listeners">
    <slot />
    <div v-if="info" class="van-icon__info">{{ info }}</div>
  </i>
</template>

<script>
import install from '../utils/install';

export default {
  install,

  name: 'van-icon',

  props: {
    name: String,
    info: String
  }
};
</script>
