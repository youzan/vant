import { on } from '../utils/dom/event';

function getDirection(x, y) {
  if (x > y) {
    return 'horizontal';
  }

  if (y > x) {
    return 'vertical';
  }

  return '';
}

export const TouchMixin = {
  data() {
    return { direction: '' };
  },

  methods: {
    touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },

    touchMove(event) {
      const touch = event.touches[0];
      // safari back will set clientX to negative number
      this.deltaX = touch.clientX < 0 ? 0 : touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);

      // lock direction when distance is greater than a certain value
      const LOCK_DIRECTION_DISTANCE = 10;
      if (
        !this.direction ||
        (this.offsetX < LOCK_DIRECTION_DISTANCE &&
          this.offsetY < LOCK_DIRECTION_DISTANCE)
      ) {
        this.direction = getDirection(this.offsetX, this.offsetY);
      }
    },

    resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },

    // avoid Vue 2.6 event bubble issues by manually binding events
    // https://github.com/vant-ui/vant/issues/3015
    bindTouchEvent(el) {
      const { onTouchStart, onTouchMove, onTouchEnd } = this;

      on(el, 'touchstart', onTouchStart);
      on(el, 'touchmove', onTouchMove);

      if (onTouchEnd) {
        on(el, 'touchend', onTouchEnd);
        on(el, 'touchcancel', onTouchEnd);
      }
    },
  },
};
