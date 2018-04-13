<template>
  <div
    v-clickoutside:touchstart="onClick"
    class="van-cell-swipe"
    @click="onClick('cell')"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="endDrag"
    @touchcancel="endDrag"
  >
    <div class="van-cell-swipe__wrapper" :style="wrapperStyle" @transitionend="swipe = false">
      <div class="van-cell-swipe__left" @click.stop="onClick('left')" v-if="leftWidth">
        <slot name="left" />
      </div>
      <slot />
      <div class="van-cell-swipe__right" @click.stop="onClick('right')" v-if="rightWidth">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import Clickoutside from '../utils/clickoutside';

const THRESHOLD = 0.15;

export default create({
  name: 'cell-swipe',

  props: {
    onClose: Function,
    leftWidth: {
      type: Number,
      default: 0
    },
    rightWidth: {
      type: Number,
      default: 0
    }
  },

  directives: {
    Clickoutside
  },

  data() {
    return {
      offset: 0,
      draging: false
    };
  },

  computed: {
    wrapperStyle() {
      return {
        transform: `translate3d(${this.offset}px, 0, 0)`,
        transition: this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
      };
    }
  },

  methods: {
    close() {
      this.offset = 0;
    },

    resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },

    swipeMove(offset = 0) {
      this.offset = offset;
      offset && (this.swiping = true);
      !offset && (this.opened = false);
    },

    swipeLeaveTransition(direction) {
      const { offset, leftWidth, rightWidth } = this;
      const threshold = this.opened ? (1 - THRESHOLD) : THRESHOLD;

      // right
      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.swipeMove(-rightWidth);
        this.resetSwipeStatus();
      // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.swipeMove(leftWidth);
        this.resetSwipeStatus();
      } else {
        this.swipeMove();
      }
    },

    startDrag(event) {
      this.draging = true;
      this.direction = '';
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;

      if (this.opened) {
        this.startX -= this.offset;
      }
    },

    onDrag(event) {
      const offsetTop = event.touches[0].clientY - this.startY;
      const offsetLeft = event.touches[0].clientX - this.startX;

      if ((offsetLeft < 0 && -offsetLeft > this.rightWidth) ||
        (offsetLeft > 0 && offsetLeft > this.leftWidth) ||
        (offsetLeft > 0 && !this.leftWidth) ||
        (offsetLeft < 0 && !this.rightWidth)) {
        return;
      }

      const y = Math.abs(offsetTop);
      const x = Math.abs(offsetLeft);
      const swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
      this.direction = this.direction || this.getDirection(event.touches[0]);

      if (swiping && this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(offsetLeft);
      };
    },

    endDrag() {
      this.draging = false;
      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      };
    },

    getDirection(touch) {
      const offsetX = Math.abs(touch.clientX - this.startX);
      const offsetY = Math.abs(touch.clientY - this.startY);
      return offsetX > offsetY ? 'horizontal' : offsetX < offsetY ? 'vertical' : '';
    },

    onClick(position = 'outside') {
      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  }
});
</script>
