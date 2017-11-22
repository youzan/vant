<template>
  <span class="van-tag van-hairline--surround" :class="{ [`van-tag--${type}`]: type, 'van-tag--plain': plain, 'van-tag--mark': mark }">
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
