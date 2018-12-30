<template>
  <transition name="van-slide-down">
    <div
      v-show="value"
      v-text="message"
      :class="b()"
      :style="style"
    />
  </transition>
</template>

<script>
import Popup from '../mixins/popup';
import create from '../utils/create';
import { RED, WHITE } from '../utils/color';

export default create({
  name: 'notify',

  mixins: [Popup],

  props: {
    message: [String, Number],
    color: {
      type: String,
      value: WHITE
    },
    background: {
      type: String,
      value: RED
    },
    duration: {
      type: Number,
      value: 3000
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    style() {
      return {
        color: this.color,
        background: this.background
      };
    }
  }
});
</script>
