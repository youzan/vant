<template>
  <i class="van-icon" :class="`van-icon-${name}`" v-on="$listeners">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'van-icon',
  props: {
    name: String
  }
};
</script>
