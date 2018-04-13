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
import Touch from '../mixins/touch';

const THRESHOLD = 0.15;

export default create({
  name: 'cell-swipe',

  mixins: [Touch],

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
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.offset;
      }
    },

    onDrag(event) {
      this.touchMove(event);
      const { deltaX, deltaY } = this;

      if ((deltaX < 0 && (-deltaX > this.rightWidth || !this.rightWidth)) ||
        (deltaX > 0 && (deltaX > this.leftWidth || deltaX > 0 && !this.leftWidth))) {
        return;
      }

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(deltaX);
      };
    },

    endDrag() {
      this.draging = false;
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
