<template>
  <span class="zan-tag" :class="[type ? `zan-tag--${type}`: '', { 'is-plain': plain, 'is-mark': mark }]">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'zan-tag',
    props: {
      type: String,
      mark: Boolean,
      plain: Boolean
    }
  };
</script>
