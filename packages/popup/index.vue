<template>
  <transition :name="currentTransition">
    <div v-show="value" class="van-popup" :class="{ [`van-popup--${position}`]: position }">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Popup from '../mixins/popup';

export default {
  name: 'van-popup',

  mixins: [Popup],

  props: {
    transition: String,
    overlay: {
      default: true
    },
    lockOnScroll: {
      default: false
    },
    closeOnClickOverlay: {
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },

  data() {
    const transition = this.transition || (this.position === '' ? 'popup-fade' : `popup-slide-${this.position}`);
    return {
      currentValue: false,
      currentTransition: transition
    };
  },

  mounted() {
    if (this.value) {
      this.open();
    }
  }
};
</script>
