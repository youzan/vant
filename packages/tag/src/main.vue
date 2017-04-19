<template>
  <span class="van-tag" :class="[type ? `van-tag--${type}`: '', { 'is-plain': plain, 'is-mark': mark }]">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'van-tag',
    props: {
      type: String,
      mark: Boolean,
      plain: Boolean
    }
  };
</script>
