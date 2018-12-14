<template>
  <div
    v-clickoutside:touchstart="onClick"
    :class="b()"
    @click="onClick('cell')"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="endDrag"
    @touchcancel="endDrag"
  >
    <div
      :class="b('wrapper')"
      :style="wrapperStyle"
      @transitionend="swipe = false"
    >
      <div
        v-if="leftWidth"
        :class="b('left')"
        @click.stop="onClick('left')"
      >
        <slot name="left" />
      </div>
      <slot />
      <div
        v-if="rightWidth"
        :class="b('right')"
        @click.stop="onClick('right')"
      >
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
  name: 'swipe-cell',

  mixins: [Touch],

  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number
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
    open(position) {
      const offset = position === 'left' ? this.leftWidth : -this.rightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },

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
        this.open('right');
      // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.open('left');
      } else {
        this.swipeMove();
      }
    },

    startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.draging = true;
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.offset;
      }
    },

    onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);
      const { deltaX } = this;

      if ((deltaX < 0 && (-deltaX > this.rightWidth || !this.rightWidth)) ||
        (deltaX > 0 && ((deltaX > this.leftWidth || deltaX > 0) && !this.leftWidth))) {
        return;
      }

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(deltaX);
      }
    },

    endDrag() {
      if (this.disabled) {
        return;
      }

      this.draging = false;
      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      }
    },

    onClick(position = 'outside') {
      this.$emit('click', position);

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
