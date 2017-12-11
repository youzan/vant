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
        <slot name="left"></slot>
      </div>
      <slot></slot>
      <div class="van-cell-swipe__right" @click.stop="onClick('right')" v-if="rightWidth">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { create } from '../utils';
import Clickoutside from '../utils/clickoutside';

export default create({
  name: 'van-cell-swipe',

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
      offset: 0
    };
  },

  computed: {
    wrapperStyle() {
      return {
        transform: `translate3d(${this.offset}px, 0, 0)`
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
    },

    swipeLeaveTransition(direction) {
      const { offset, leftWidth, rightWidth } = this;
      // right
      if (direction > 0 && -offset > rightWidth * 0.4 && rightWidth > 0) {
        this.swipeMove(-rightWidth);
        this.resetSwipeStatus();
      // left
      } else if (direction < 0 && offset > leftWidth * 0.4 && leftWidth > 0) {
        this.swipeMove(leftWidth);
        this.resetSwipeStatus();
      } else {
        this.swipeMove();
      }
    },

    startDrag(event) {
      this.startX = event.touches[0].pageX;
      this.startY = event.touches[0].pageY;
    },

    onDrag(event) {
      if (this.opened) {
        !this.swiping && this.swipeMove();
        this.opened = false;
        return;
      }

      const offsetTop = event.touches[0].pageY - this.startY;
      const offsetLeft = event.touches[0].pageX - this.startX;
      if ((offsetLeft < 0 && -offsetLeft > this.rightWidth) ||
        (offsetLeft > 0 && offsetLeft > this.leftWidth) ||
        (offsetLeft > 0 && !this.leftWidth) ||
        (offsetLeft < 0 && !this.rightWidth)) {
        return;
      }

      const y = Math.abs(offsetTop);
      const x = Math.abs(offsetLeft);
      const swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
      if (swiping) {
        event.preventDefault();
        this.swipeMove(offsetLeft);
      };
    },

    endDrag() {
      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      };
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
