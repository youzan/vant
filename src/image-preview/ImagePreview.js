import { createNamespace } from '../utils';
import { range } from '../utils/format/number';
import { preventDefault } from '../utils/dom/event';
import { PopupMixin } from '../mixins/popup';
import { TouchMixin } from '../mixins/touch';
import Image from '../image';
import Loading from '../loading';
import Swipe from '../swipe';
import SwipeItem from '../swipe-item';

const [createComponent, bem] = createNamespace('image-preview');

function getDistance(touches) {
  return Math.sqrt(
    (touches[0].clientX - touches[1].clientX) ** 2 +
      (touches[0].clientY - touches[1].clientY) ** 2
  );
}

export default createComponent({
  mixins: [PopupMixin, TouchMixin],

  props: {
    className: null,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: () => []
    },
    loop: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: Number,
      default: 500
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    startPosition: {
      type: Number,
      default: 0
    },
    minZoom: {
      type: Number,
      default: 1 / 3
    },
    maxZoom: {
      type: Number,
      default: 3
    },
    overlayClass: {
      type: String,
      default: bem('overlay')
    }
  },

  data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      active: 0,
      moving: false,
      zooming: false,
      doubleClickTimer: null
    };
  },

  computed: {
    imageStyle() {
      const { scale } = this;
      const style = {
        transitionDuration: this.zooming || this.moving ? '0s' : '.3s'
      };

      if (scale !== 1) {
        style.transform = `scale3d(${scale}, ${scale}, 1) translate(${this.moveX /
          scale}px, ${this.moveY / scale}px)`;
      }

      return style;
    }
  },

  watch: {
    value() {
      this.setActive(this.startPosition);
    },

    startPosition(active) {
      this.setActive(active);
    }
  },

  methods: {
    onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },

    onWrapperTouchEnd(event) {
      preventDefault(event);

      const deltaTime = new Date() - this.touchStartTime;
      const { offsetX = 0, offsetY = 0 } = this.$refs.swipe || {};

      // prevent long tap to close component
      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        if (!this.doubleClickTimer) {
          this.doubleClickTimer = setTimeout(() => {
            const index = this.active;

            this.$emit('close', {
              index,
              url: this.images[index]
            });

            if (!this.asyncClose) {
              this.$emit('input', false);
            }

            this.doubleClickTimer = null;
          }, 300);
        } else {
          clearTimeout(this.doubleClickTimer);
          this.doubleClickTimer = null;
          this.toggleScale();
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

    onImageTouchStart(event) {
      const { touches } = event;
      const { offsetX = 0 } = this.$refs.swipe || {};

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      } /* istanbul ignore else */ else if (touches.length === 2 && !offsetX) {
        this.startZoom(event);
      }
    },

    onImageTouchMove(event) {
      const { touches } = event;
      if (this.moving || this.zooming) {
        preventDefault(event, true);
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
        this.scale = range(scale, this.minZoom, this.maxZoom);
      }
    },

    onImageTouchEnd(event) {
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
    },

    setActive(active) {
      this.resetScale();

      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },

    resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    },

    toggleScale() {
      const scale = this.scale > 1 ? 1 : 2;

      this.scale = scale;
      this.moveX = 0;
      this.moveY = 0;
    },

    genIndex() {
      if (this.showIndex) {
        return (
          <div class={bem('index')}>
            {this.slots('index') || `${this.active + 1} / ${this.images.length}`}
          </div>
        );
      }
    },

    genCover() {
      const cover = this.slots('cover');

      if (cover) {
        return <div class={bem('cover')}>{cover}</div>;
      }
    },

    genImages() {
      const imageSlots = {
        loading: () => <Loading type="spinner" />
      };

      return (
        <Swipe
          ref="swipe"
          loop={this.loop}
          class={bem('swipe')}
          indicatorColor="white"
          duration={this.swipeDuration}
          initialSwipe={this.startPosition}
          showIndicators={this.showIndicators}
          onChange={this.setActive}
          nativeOnTouchstart={this.onWrapperTouchStart}
          nativeOnTouchMove={preventDefault}
          nativeOnTouchend={this.onWrapperTouchEnd}
          nativeOnTouchcancel={this.onWrapperTouchEnd}
        >
          {this.images.map((image, index) => (
            <SwipeItem>
              <Image
                src={image}
                fit="contain"
                class={bem('image')}
                lazyLoad={this.lazyLoad}
                scopedSlots={imageSlots}
                style={index === this.active ? this.imageStyle : null}
                nativeOnTouchstart={this.onImageTouchStart}
                nativeOnTouchmove={this.onImageTouchMove}
                nativeOnTouchend={this.onImageTouchEnd}
                nativeOnTouchcancel={this.onImageTouchEnd}
              />
            </SwipeItem>
          ))}
        </Swipe>
      );
    }
  },

  render() {
    if (!this.value) {
      return;
    }

    return (
      <transition name="van-fade">
        <div class={[bem(), this.className]}>
          {this.genImages()}
          {this.genIndex()}
          {this.genCover()}
        </div>
      </transition>
    );
  }
});
