<template>
  <span :class="['van-tag', 'van-hairline--surround', { [`van-tag--${type}`]: type, 'is-plain': plain, 'is-mark': mark }]">
    <slot></slot>
  </span>
</template>

<script>
const ALLOW_TYPE = ['danger', 'success', 'primary'];

export default {
  name: 'van-tag',
  props: {
    type: {
      type: String,
      validator: val => ~ALLOW_TYPE.indexOf(val)
    },
    mark: Boolean,
    plain: Boolean
  }
};
</script>
