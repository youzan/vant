<template>
  <transition name="image-fade">
    <div class="zan-image-preview" ref="previewContainer" v-show="value" @click="handlePreviewClick">
      <zan-swipe>
        <zan-swipe-item v-for="item in images">
          <img class="zan-image-preview__image" :src="item" alt="" :class="{
            'zan-image-preview__image--center': true
          }">
        </zan-swipe-item>
      </zan-swipe>
    </div>
  </transition>
</template>

<script>
import Popup from 'src/mixins/popup';
import ZanSwipe from 'packages/swipe';
import ZanSwipeItem from 'packages/swipe-item';

export default {
  name: 'zan-image-preview',

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
