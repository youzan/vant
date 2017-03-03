<template>
  <transition name="image-fade">
    <div class="zan-image-preview" ref="previewContainer" v-show="value">
      <img class="zan-image-preview__image" :src="image" alt="" :style="imageStyle">
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
      image: 'https://img.yzcdn.cn/upload_files/2017/03/02/FhDtQ7okM18PeQ3P0RAfIzVADUEq.jpg'
    };
  },

  mounted() {
    this.open();
    this.previewSize = this.$refs.previewContainer.getBoundingClientRect();
  },

  computed: {
    /**
     * 图片样式计算
     * 根据屏幕自适应显示最长边
     */
    imageStyle() {
    }
  },

  methods: {
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
