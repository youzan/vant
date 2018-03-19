<template>
  <transition name="van-fade">
    <div class="van-toast-wrapper" v-show="visible">
      <div class="van-toast" :class="[`van-toast--${displayStyle}`, `van-toast--${position}`]">
        <!-- text only -->
        <div v-if="displayStyle === 'text'">{{ message }}</div>
        <div v-if="displayStyle === 'html'" v-html="message" />

        <!-- with icon -->
        <template v-if="displayStyle === 'default'">
          <loading v-if="type === 'loading'" color="white" />
          <icon v-else class="van-toast__icon" :name="type" />
          <div v-if="hasMessage" class="van-toast__text">{{ message }}</div>
        </template>
      </div>
      <div class="van-toast__overlay" :class="{ 'van-toast__overlay--mask': mask }" v-if="forbidClick || mask" />
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';

const STYLE_LIST = ['success', 'fail', 'loading'];

export default create({
  name: 'toast',

  props: {
    mask: Boolean,
    message: [String, Number],
    forbidClick: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    }
  },

  data() {
    return {
      visible: false
    };
  },

  computed: {
    displayStyle() {
      return STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    },

    hasMessage() {
      return this.message || this.message === 0;
    }
  }
});
</script>
