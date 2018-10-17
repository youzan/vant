<template>
  <span
    :class="[b({
      mark,
      plain,
      [type]: type
    }), {
      'van-hairline--surround': plain
    }]"
    :style="style"
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
    color: String,
    plain: Boolean
  },

  computed: {
    style() {
      if (this.color) {
        const key = this.plain ? 'color' : 'backgroundColor';
        return {
          [key]: this.color
        };
      }
    }
  }
});
</script>
