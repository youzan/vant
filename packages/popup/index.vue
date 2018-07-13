<template>
  <transition :name="currentTransition">
    <div v-if="shouldRender" v-show="value" :class="b({ [position]: position })">
      <slot />
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';

export default create({
  name: 'popup',

  mixins: [Popup],

  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },

  computed: {
    currentTransition() {
      return this.transition || (this.position === '' ? 'van-fade' : `popup-slide-${this.position}`);
    }
  }
});
</script>
