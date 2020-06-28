// Utils
import { bem } from './shared';
import { range } from '../utils/format/number';
import { preventDefault } from '../utils/dom/event';

// Mixins
import { TouchMixin } from '../mixins/touch';

// Component
import Image from '../image';
import Loading from '../loading';
import SwipeItem from '../swipe-item';

const DOUBLE_CLICK_INTERVAL = 250;

function getDistance(touches) {
  return Math.sqrt(
    (touches[0].clientX - touches[1].clientX) ** 2 +
      (touches[0].clientY - touches[1].clientY) ** 2
  );
}

export default {
  mixins: [TouchMixin],

  props: {
    src: String,
    minZoom: [Number, String],
    maxZoom: [Number, String],
  },

  data() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
    };
  },

  computed: {
    imageStyle() {
      const { scale } = this;
      const style = {
        transitionDuration: this.zooming || this.moving ? '0s' : '.3s',
      };

      if (scale !== 1) {
        const offsetX = this.moveX / scale;
        const offsetY = this.moveY / scale;
        style.transform = `scale(${scale}, ${scale}) translate(${offsetX}px, ${offsetY}px)`;
      }

      return style;
    },
  },

  methods: {
    startMove(event) {
      this.touchStart(event);
      this.setMaxMove();
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
    },

    setMaxMove() {
      const {
        scale,
        windowWidth,
        windowHeight,
        displayWidth,
        displayHeight,
      } = this;

      if (this.displayWidth && this.displayHeight) {
        this.maxMoveX = Math.max(0, (displayWidth * scale - windowWidth) / 2);
        this.maxMoveY = Math.max(0, (displayHeight * scale - windowHeight) / 2);
      }
    },

    resetScale() {
      this.setScale(1);
      this.moveX = 0;
      this.moveY = 0;
    },

    setScale(scale) {
      this.scale = range(scale, +this.minZoom, +this.maxZoom);
      this.$emit('scale', {
        scale: this.scale,
        index: this.active,
      });
    },

    toggleScale() {
      const scale = this.scale > 1 ? 1 : 2;

      this.setScale(scale);
      this.moveX = 0;
      this.moveY = 0;
    },

    onTouchStart(event) {
      const { touches } = event;
      const { offsetX = 0 } = this;

      this.touchStartTime = new Date();

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      } else if (touches.length === 2 && !offsetX) {
        this.startZoom(event);
      }
    },

    onTouchMove(event) {
      const { touches } = event;

      this.touchMove(event);

      if (this.moving || this.zooming) {
        preventDefault(event, true);
      }

      if (this.moving) {
        const moveX = this.deltaX + this.startMoveX;
        const moveY = this.deltaY + this.startMoveY;
        this.moveX = range(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = range(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        const distance = getDistance(touches);
        const scale = (this.startScale * distance) / this.startDistance;

        this.setScale(scale);
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
          preventDefault(event, true);
        }
      }

      const deltaTime = new Date() - this.touchStartTime;
      const { offsetX = 0, offsetY = 0 } = this;

      // prevent long tap to close component
      if (deltaTime < DOUBLE_CLICK_INTERVAL && offsetX < 10 && offsetY < 10) {
        if (!this.doubleClickTimer) {
          this.doubleClickTimer = setTimeout(() => {
            this.$emit('close');

            this.doubleClickTimer = null;
          }, DOUBLE_CLICK_INTERVAL);
        } else {
          clearTimeout(this.doubleClickTimer);
          this.doubleClickTimer = null;
          this.toggleScale();
        }
      }

      this.resetTouchStatus();
    },

    startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },

    onLoad(event) {
      const { windowWidth, windowHeight } = this;
      const { naturalWidth, naturalHeight } = event.target;
      const windowRatio = windowHeight / windowWidth;
      const imageRatio = naturalHeight / naturalWidth;

      if (imageRatio < windowRatio) {
        this.displayWidth = windowWidth;
        this.displayHeight = windowWidth * imageRatio;
      } else {
        this.displayWidth = windowHeight / imageRatio;
        this.displayHeight = windowHeight;
      }
    },
  },

  render() {
    const imageSlots = {
      loading: () => <Loading type="spinner" />,
    };

    return (
      <SwipeItem
        nativeOnTouchstart={this.onTouchStart}
        nativeOnTouchmove={this.onTouchMove}
        nativeOnTouchend={this.onTouchEnd}
        nativeOnTouchcancel={this.onTouchEnd}
      >
        <Image
          src={this.src}
          fit="contain"
          class={bem('image')}
          style={this.imageStyle}
          scopedSlots={imageSlots}
          onLoad={this.onLoad}
        />
      </SwipeItem>
    );
  },
};
