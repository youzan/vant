<template>
  <span
    class="van-tag van-hairline--surround"
    :class="{
      [`van-tag--${type}`]: type,
      'van-tag--plain': plain,
      'van-tag--mark': mark
    }"
  >
    <slot />
  </span>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'tag',
  props: {
    type: String,
    mark: Boolean,
    plain: Boolean
  }
});
</script>
