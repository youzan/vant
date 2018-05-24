<template>
  <transition :name="currentTransition">
    <div v-if="inited || !lazyRender" v-show="value" :class="b({ [position]: position })">
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
    lazyRender: {
      type: Boolean,
      default: true
    },
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

  data() {
    return {
      inited: this.value
    };
  },

  computed: {
    currentTransition() {
      return this.transition || (this.position === '' ? 'van-fade' : `popup-slide-${this.position}`);
    }
  },

  watch: {
    value() {
      this.inited = this.inited || this.value;
    }
  }
});
</script>
