<template>
  <transition name="image-fade">
    <div class="zan-image-preview" ref="previewContainer" v-show="value" @click="handlePreviewClick">
      <img class="zan-image-preview__image" :src="image" alt="" :class="{
        'zan-image-preview__image--center': true,
        'zan-image-preview__image--top': imageIsLargeView
      }">
    </div>
  </transition>
</template>

<script>
import Popup from 'src/mixins/popup';

export default {
  name: 'zan-image-preview',

  mixins: [Popup],

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
      image: '',
      viewportSize: null
    };
  },

  methods: {
    handlePreviewClick() {
      this.value = false;
    },
    /**
     * 图片样式计算
     * 根据屏幕自适应显示最长边
     */
    computeImageStyle() {
      // const previewSize = this.$refs.previewContainer.getBoundingClientRect();
      // const img = new Image();
      // const _this = this;

      // img.onload = function() {
      //   const imgRatio = parseFloat(this.width / this.height);
      //   const previewRatio = parseFloat(previewSize.width / previewSize.height);

      //   if (previewRatio <= imgRatio) {
      //     const top = (previewSize.height - parseInt(previewSize.width / imgRatio, 10)) / 2;
      //     _this.imageStyle = {
      //       width: '100%',
      //       height: 'auto',
      //       top: top + 'px'
      //     };
      //   } else if (previewRatio > imgRatio) {
      //     _this.imageStyle = {
      //       width: 'auto',
      //       height: '100%'
      //     };
      //   }
      // };

      // img.src = this.image;
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
