<template>
  <transition name="image-fade">
    <div class="van-image-preview" ref="previewContainer" v-show="value">
      <van-swipe>
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img class="van-image-preview__image" @load="handleLoad" :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue';
import Popup from '../mixins/popup';
import Swipe from '../swipe';
import SwipeItem from '../swipe-item';

export default {
  name: 'van-image-preview',

  mixins: [Popup],

  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },

  props: {
    overlay: {
      default: true
    },

    lockOnScroll: {
      default: true
    },

    closeOnClickOverlay: {
      default: true
    }
  },

  data() {
    return {
      images: [],
      viewportSize: null
    };
  },

  methods: {
    handleLoad(event) {
      const container = this.$refs.previewContainer;
      const containerSize = container.getBoundingClientRect();
      const ratio = containerSize.width / containerSize.height;
      const target = event.currentTarget;
      const targetRatio = target.width / target.height;

      const centerClass = 'van-image-preview__image--center';
      const bigClass = 'van-image-preview__image--big';

      if (targetRatio > ratio) {
        target.className += (' ' + centerClass);
      } else {
        target.className += (' ' + bigClass);
      }
    },

    close() {
      /* istanbul ignore if */
      if (this.closing) return;

      this.closing = true;

      this.value = false;

      /* istanbul ignore else */
      if (this.lockOnScroll) {
        setTimeout(() => {
          if (this.overlay && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
          }
          this.bodyOverflow = null;
        }, 200);
      }

      this.opened = false;
      this.doAfterClose();
    }
  },

  mounted() {
    const supportTouch = !Vue.prototype.$isServer && 'ontouchstart' in window;
    const container = this.$refs.previewContainer;

    /* istanbul ignore else */
    if (supportTouch) {
      let touchStartTime;

      container.addEventListener('touchstart', () => {
        touchStartTime = new Date();
      });
      container.addEventListener('touchend', () => {
        /* istanbul ignore else */
        if (new Date() - touchStartTime < 1500) {
          this.value = false;
        }
      });
    } else {
      container.addEventListener('click', () => {
        this.value = false;
      });
    }
  }
};
</script>
