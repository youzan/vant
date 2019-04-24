import { use, range } from '../utils';
import { PopupMixin } from '../mixins/popup';
import { TouchMixin } from '../mixins/touch';
import Swipe from '../swipe';
import SwipeItem from '../swipe-item';

const [sfc, bem] = use('image-preview');

function getDistance(touches) {
  return Math.sqrt(
    Math.abs(
      (touches[0].clientX - touches[1].clientX) *
        (touches[0].clientY - touches[1].clientY)
    )
  );
}

export default sfc({
  mixins: [PopupMixin, TouchMixin],

  props: {
    images: Array,
    className: null,
    lazyLoad: Boolean,
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
    imageStyle() {
      const { scale } = this;
      const style = {
        transition: this.zooming || this.moving ? '' : '.3s all'
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
        this.scale = range(scale, this.minZoom, this.maxZoom);
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
      this.$emit('change', active);
    },

    resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    }
  },

  render(h) {
    if (!this.value) {
      return;
    }

    const { active, images } = this;

    const Index = this.showIndex && (
      <div class={bem('index')}>
        {this.slots('index') || `${active + 1}/${images.length}`}
      </div>
    );

    const Images = (
      <Swipe
        ref="swipe"
        loop={this.loop}
        indicatorColor="white"
        initialSwipe={this.startPosition}
        showIndicators={this.showIndicators}
        onChange={this.onChange}
      >
        {images.map((image, index) => {
          const props = {
            class: bem('image'),
            style: index === active ? this.imageStyle : null,
            on: {
              touchstart: this.onTouchStart,
              touchmove: this.onTouchMove,
              touchend: this.onTouchEnd,
              touchcancel: this.onTouchEnd
            }
          };
          return (
            <SwipeItem>
              {this.lazyLoad ? (
                <img vLazy={image} {...props} />
              ) : (
                <img src={image} {...props} />
              )}
            </SwipeItem>
          );
        })}
      </Swipe>
    );

    return (
      <transition name="van-fade">
        <div
          class={[bem(), this.className]}
          onTouchstart={this.onWrapperTouchStart}
          onTouchend={this.onWrapperTouchEnd}
          onTouchcancel={this.onWrapperTouchEnd}
        >
          {Index}
          {Images}
        </div>
      </transition>
    );
  }
});
