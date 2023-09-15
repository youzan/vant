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
    show: Boolean,
    active: Number,
    minZoom: [Number, String],
    maxZoom: [Number, String],
    rootWidth: Number,
    rootHeight: Number,
  },

  data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0,
    };
  },

  computed: {
    vertical() {
      const { rootWidth, rootHeight } = this;
      const rootRatio = rootHeight / rootWidth;
      return this.imageRatio > rootRatio;
    },

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

    maxMoveX() {
      if (this.imageRatio) {
        const displayWidth = this.vertical
          ? this.rootHeight / this.imageRatio
          : this.rootWidth;

        return Math.max(0, (this.scale * displayWidth - this.rootWidth) / 2);
      }

      return 0;
    },

    maxMoveY() {
      if (this.imageRatio) {
        const displayHeight = this.vertical
          ? this.rootHeight
          : this.rootWidth * this.imageRatio;

        return Math.max(0, (this.scale * displayHeight - this.rootHeight) / 2);
      }

      return 0;
    },
  },

  watch: {
    active: 'resetScale',

    show(val) {
      if (!val) {
        this.resetScale();
      }
    },
  },

  mounted() {
    this.bindTouchEvent(this.$el);
  },

  methods: {
    resetScale() {
      this.setScale(1);
      this.moveX = 0;
      this.moveY = 0;
    },

    setScale(scale) {
      scale = range(scale, +this.minZoom, +this.maxZoom);

      if (scale !== this.scale) {
        this.scale = scale;
        this.$emit('scale', {
          scale: this.scale,
          index: this.active,
        });
      }
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

      this.touchStart(event);
      this.touchStartTime = new Date();

      this.fingerNum = touches.length;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;

      this.moving = this.fingerNum === 1 && this.scale !== 1;
      this.zooming = this.fingerNum === 2 && !offsetX;

      if (this.zooming) {
        this.startScale = this.scale;
        this.startDistance = getDistance(event.touches);
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
      let stopPropagation = false;

      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        stopPropagation = true;

        if (
          this.moving &&
          this.startMoveX === this.moveX &&
          this.startMoveY === this.moveY
        ) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          if (this.zooming) {
            this.moveX = range(this.moveX, -this.maxMoveX, this.maxMoveX);
            this.moveY = range(this.moveY, -this.maxMoveY, this.maxMoveY);
            this.zooming = false;
          }

          this.moving = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }
      }

      // eliminate tap delay on safari
      preventDefault(event, stopPropagation);

      this.checkTap();
      this.resetTouchStatus();
    },

    checkTap() {
      if (this.fingerNum > 1) {
        return;
      }

      const { offsetX = 0, offsetY = 0 } = this;
      const deltaTime = new Date() - this.touchStartTime;
      const TAP_TIME = 250;
      const TAP_OFFSET = 5;

      if (
        offsetX < TAP_OFFSET &&
        offsetY < TAP_OFFSET &&
        deltaTime < TAP_TIME
      ) {
        if (this.doubleTapTimer) {
          clearTimeout(this.doubleTapTimer);
          this.doubleTapTimer = null;
          this.toggleScale();
        } else {
          this.doubleTapTimer = setTimeout(() => {
            this.$emit('close');
            this.doubleTapTimer = null;
          }, TAP_TIME);
        }
      }
    },

    onLoad(event) {
      const { naturalWidth, naturalHeight } = event.target;
      this.imageRatio = naturalHeight / naturalWidth;
    },
  },

  render() {
    const imageSlots = {
      loading: () => <Loading type="spinner" />,
    };

    return (
      <SwipeItem class={bem('swipe-item')}>
        <Image
          src={this.src}
          fit="contain"
          class={bem('image', { vertical: this.vertical })}
          style={this.imageStyle}
          scopedSlots={imageSlots}
          onLoad={this.onLoad}
        />
      </SwipeItem>
    );
  },
};
