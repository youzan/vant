<template>
  <div
    v-show="value"
    :class="b()"
    @touchstart="onTouchStart"
    @touchmove.prevent="touchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <swipe :initial-swipe="startPosition">
      <swipe-item v-for="(item, index) in images" :key="index">
        <img :class="b('image')" :src="item" >
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';
import Swipe from '../swipe';
import SwipeItem from '../swipe-item';
import Touch from '../mixins/touch';

export default create({
  name: 'image-preview',

  mixins: [Popup, Touch],

  components: {
    Swipe,
    SwipeItem
  },

  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      images: [],
      startPosition: 0
    };
  },

  methods: {
    onTouchStart(event) {
      this.touchStartTime = new Date();
      this.touchStart(event);
    },

    onTouchEnd(event) {
      event.preventDefault();
      // prevent long tap to close component
      const deltaTime = new Date() - this.touchStartTime;
      if (deltaTime < 100 && this.offsetX < 20 && this.offsetY < 20) {
        this.$emit('input', false);
      }
    }
  }
});
</script>
