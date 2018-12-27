<template>
  <transition name="van-fade">
    <div
      v-if="value"
      :class="b()"
      @touchstart="onWrapperTouchStart"
      @touchend="onWrapperTouchEnd"
      @touchcancel="onWrapperTouchEnd"
    >
      <div
        v-if="showIndex"
        :class="b('index')"
      >
        {{ active + 1 }}/{{ count }}
      </div>
      <swipe
        ref="swipe"
        :loop="loop"
        indicator-color="white"
        :initial-swipe="startPosition"
        :show-indicators="showIndicators"
        @change="onChange"
      >
        <swipe-item
          v-for="(item, index) in images"
          :key="index"
        >
          <img
            :class="b('image')"
            :src="item"
            :style="index === active ? imageStyle : null"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
            @touchcancel="onTouchEnd"
          >
        </swipe-item>
      </swipe>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';
import Touch from '../mixins/touch';
import Swipe from '../swipe';
import SwipeItem from '../swipe-item';
import { range } from '../utils';

const MAX_ZOOM = 3;
const MIN_ZOOM = 1 / 3;

function getDistance(touches) {
  return Math.sqrt(
    Math.abs(
      (touches[0].clientX - touches[1].clientX) *
        (touches[0].clientY - touches[1].clientY)
    )
  );
}

export default create({
  name: 'image-preview',

  mixins: [Popup, Touch],

  components: {
    Swipe,
    SwipeItem
  },

  props: {
    images: Array,
    asyncClose: Boolean,
    startPosition: Number,
    showIndicators: Boolean,
    loop: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    overlayClass: {
      type: String,
      default: 'van-image-preview__overlay'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: 0
    };
  },

  computed: {
    count() {
      return this.images.length;
    },

    imageStyle() {
      const { scale } = this;
      const style = {
        transition: this.zooming || this.moving ? '' : '.3s all'
      };

      if (scale !== 1) {
        style.transform = `scale3d(${scale}, ${scale}, 1) translate(${this
          .moveX / scale}px, ${this.moveY / scale}px)`;
      }

      return style;
    }
  },

  watch: {
    value() {
      this.active = this.startPosition;
    },

    startPosition(active) {
      this.active = active;
    }
  },

  methods: {
    onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },

    onWrapperTouchEnd(event) {
      event.preventDefault();

      const deltaTime = new Date() - this.touchStartTime;
      const { offsetX = 0, offsetY = 0 } = this.$refs.swipe || {};

      // prevent long tap to close component
      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        const index = this.active;

        this.resetScale();
        this.$emit('close', {
          index,
          url: this.images[index]
        });

        if (!this.asyncClose) {
          this.$emit('input', false);
        }
      }
    },

    startMove(event) {
      const image = event.currentTarget;
      const rect = image.getBoundingClientRect();
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },

    startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },

    onTouchStart(event) {
      const { touches } = event;
      const { offsetX = 0 } = this.$refs.swipe || {};

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      } /* istanbul ignore else */ else if (touches.length === 2 && !offsetX) {
        this.startZoom(event);
      }
    },

    onTouchMove(event) {
      const { touches } = event;
      if (this.moving || this.zooming) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (this.moving) {
        this.touchMove(event);
        const moveX = this.deltaX + this.startMoveX;
        const moveY = this.deltaY + this.startMoveY;
        this.moveX = range(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = range(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        const distance = getDistance(touches);
        const scale = (this.startScale * distance) / this.startDistance;
        this.scale = range(scale, MIN_ZOOM, MAX_ZOOM);
      }
    },

    onTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        let stopPropagation = true;

        if (
          this.moving &&
          this.startMoveX === this.moveX &&
          this.startMoveY === this.moveY
        ) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    },

    onChange(active) {
      this.resetScale();
      this.active = active;
    },

    resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    }
  }
});
</script>
