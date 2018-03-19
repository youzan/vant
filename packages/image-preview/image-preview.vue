<template>
  <div
    v-show="value"
    class="van-image-preview"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <swipe :initial-swipe="startPosition">
      <swipe-item v-for="(item, index) in images" :key="index">
        <img class="van-image-preview__image" :src="item" >
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';
import Swipe from '../swipe';
import SwipeItem from '../swipe-item';

export default create({
  name: 'image-preview',

  mixins: [Popup],

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
      this.touchStartX = event.touches[0].clientX;
      this.touchStartY = event.touches[0].clientY;
      this.deltaX = 0;
      this.deltaY = 0;
    },

    onTouchMove(event) {
      event.preventDefault();
      this.deltaX = event.touches[0].clientX - this.touchStartX;
      this.deltaY = event.touches[0].clientY - this.touchStartY;
    },

    onTouchEnd(event) {
      event.preventDefault();
      // prevent long tap to close component
      const deltaTime = new Date() - this.touchStartTime;
      if (deltaTime < 100 && Math.abs(this.deltaX) < 20 && Math.abs(this.deltaY) < 20) {
        this.close();
      }
    }
  }
});
</script>
