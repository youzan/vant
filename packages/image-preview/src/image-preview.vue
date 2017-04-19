<template>
  <transition name="image-fade">
    <div class="van-image-preview" ref="previewContainer" v-show="value" @click="handlePreviewClick">
      <van-swipe>
        <van-swipe-item v-for="item in images">
          <img class="van-image-preview__image" @load="handleLoad" :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
  </transition>
</template>

<script>
import Popup from 'src/mixins/popup';
import ZanSwipe from 'packages/swipe';
import ZanSwipeItem from 'packages/swipe-item';

export default {
  name: 'van-image-preview',

  mixins: [Popup],

  components: {
    ZanSwipe,
    ZanSwipeItem
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
    handlePreviewClick() {
      this.value = false;
    },

    handleLoad(event) {
      const containerSize = this.$refs.previewContainer.getBoundingClientRect();
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
      if (this.closing) return;

      this.closing = true;

      this.value = false;

      if (this.lockOnScroll) {
        setTimeout(() => {
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
          }
          this.bodyOverflow = null;
        }, 200);
      }

      this.opened = false;
      this.doAfterClose();
    }
  }
};
</script>
