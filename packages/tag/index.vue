<template>
  <span
    :class="[b({
      mark,
      plain,
      round,
      [size]: size
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

const DEFAULT_COLOR = '#999';
const COLOR_MAP = {
  danger: '#f44',
  primary: '#38f',
  success: '#06bf04'
};

export default create({
  name: 'tag',

  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean
  },

  computed: {
    style() {
      const color = this.color || COLOR_MAP[this.type] || DEFAULT_COLOR;
      const key = this.plain ? 'color' : 'backgroundColor';
      return { [key]: color };
    }
  }
});
</script>
