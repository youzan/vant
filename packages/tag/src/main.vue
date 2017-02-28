<template>
  <span class="z-tag" :class="[type ? `z-tag--${type}`: '', { 'is-plain': plain, 'is-mark': mark }]">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'z-tag',
    props: {
      type: String,
      mark: Boolean,
      plain: Boolean
    }
  };
</script>
