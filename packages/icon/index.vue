<template>
  <i class="van-icon" :class="`van-icon-${name}`" @click="$emit('click', $event)">
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
