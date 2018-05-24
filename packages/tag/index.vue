<template>
  <span
    class="van-hairline--surround"
    :class="b({
      mark,
      plain,
      [type]: type
    })"
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
