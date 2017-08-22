<template>
  <transition :name="currentTransition">
    <div v-show="currentValue" class="van-popup" :class="[position ? 'van-popup--' + position : '']">
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
    overlay: {
      default: true
    },

    lockOnScroll: {
      default: false
    },

    closeOnClickOverlay: {
      default: true
    },

    transition: {
      type: String,
      default: 'popup-slide'
    },

    position: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      currentValue: false,
      currentTransition: this.transition
    };
  },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },

    value(val) {
      this.currentValue = val;
    }
  },

  beforeMount() {
    if (this.transition !== 'popup-fade') {
      this.currentTransition = `popup-slide-${this.position}`;
    }
  },

  mounted() {
    if (this.value) {
      this.currentValue = true;
      this.open();
    }
  }
};
</script>
