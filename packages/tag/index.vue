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
import { RED, BLUE, GREEN, GRAY_DARK } from '../utils/color';

const COLOR_MAP = {
  danger: RED,
  primary: BLUE,
  success: GREEN
};

export default create({
  name: 'tag',

  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String
  },

  computed: {
    style() {
      const color = this.color || COLOR_MAP[this.type] || GRAY_DARK;
      const key = this.plain ? 'color' : 'backgroundColor';
      const style = { [key]: color };

      if (this.textColor) {
        style.color = this.textColor;
      }

      return style;
    }
  }
});
</script>
