<template>
  <div class="van-swipe">
    <div
      v-if="count > 1"
      :style="trackStyle"
      class="van-swipe__track"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      @transitionend="$emit('change', activeIndicator)"
    >
      <slot />
    </div>
    <div v-else class="van-swipe__track">
      <slot />
    </div>
    <div class="van-swipe__indicators" v-if="showIndicators && count > 1">
      <i v-for="index in count" :class="{ 'van-swipe__indicator--active': index - 1 === activeIndicator }" />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'swipe',

  props: {
    autoplay: Number,
    loop: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },

  data() {
    return {
      width: 0,
      offset: 0,
      startX: 0,
      startY: 0,
      active: 0,
      deltaX: 0,
      swipes: [],
      direction: '',
      currentDuration: 0
    };
  },

  mounted() {
    this.initialize();
  },

  destroyed() {
    clearTimeout(this.timer);
  },

  watch: {
    swipes() {
      this.initialize();
    },

    initialSwipe() {
      this.initialize();
    },

    autoplay(autoplay) {
      if (!autoplay) {
        clearTimeout(this.timer);
      }
    }
  },

  computed: {
    count() {
      return this.swipes.length;
    },

    trackStyle() {
      return {
        paddingLeft: this.width + 'px',
        width: (this.count + 2) * this.width + 'px',
        transitionDuration: `${this.currentDuration}ms`,
        transform: `translate(${this.offset}px, 0)`
      };
    },

    activeIndicator() {
      return (this.active + this.count) % this.count;
    }
  },

  methods: {
    initialize() {
      // reset offset when children changes
      clearTimeout(this.timer);
      this.width = this.$el.getBoundingClientRect().width;
      this.active = this.initialSwipe;
      this.currentDuration = 0;
      this.offset = this.count > 1 ? -this.width * (this.active + 1) : 0;
      this.swipes.forEach(swipe => {
        swipe.offset = 0;
      });
      this.autoPlay();
    },

    onTouchStart(event) {
      clearTimeout(this.timer);

      this.deltaX = 0;
      this.direction = '';
      this.currentDuration = 0;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;

      if (this.active <= -1) {
        this.move(this.count);
      }
      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },

    onTouchMove(event) {
      this.direction = this.direction || this.getDirection(event.touches[0]);

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.deltaX = event.touches[0].clientX - this.startX;
        this.move(0, this.range(this.deltaX, [-this.width, this.width]));
      }
    },

    onTouchEnd() {
      if (this.deltaX) {
        this.move(Math.abs(this.deltaX) > 50 ? (this.deltaX > 0 ? -1 : 1) : 0);
        this.currentDuration = this.duration;
      }
      this.autoPlay();
    },

    move(move = 0, offset = 0) {
      const { active, count, swipes, deltaX, width } = this;

      if (
        !this.loop &&
        ((active === 0 && (offset > 0 || move < 0)) ||
          (active === count - 1 && (offset < 0 || move > 0)))
      ) {
        return;
      }

      if (move) {
        if (active === -1) {
          swipes[count - 1].offset = 0;
        }
        swipes[0].offset = active === count - 1 && move > 0 ? count * width : 0;

        this.active += move;
      } else {
        if (active === 0) {
          swipes[count - 1].offset = deltaX > 0 ? -count * width : 0;
        } else if (active === count - 1) {
          swipes[0].offset = deltaX < 0 ? count * width : 0;
        }
      }
      this.offset = offset - (this.active + 1) * this.width;
    },

    autoPlay() {
      const { autoplay } = this;
      if (autoplay && this.count > 1) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.currentDuration = 0;

          if (this.active >= this.count) {
            this.move(-this.count);
          }

          setTimeout(() => {
            this.currentDuration = this.duration;
            this.move(1);
            this.autoPlay();
          }, 30);
        }, autoplay);
      }
    },

    getDirection(touch) {
      const offsetX = Math.abs(touch.clientX - this.startX);
      const offsetY = Math.abs(touch.clientY - this.startY);
      return offsetX > offsetY ? 'horizontal' : offsetX < offsetY ? 'vertical' : '';
    },

    range(num, arr) {
      return Math.min(Math.max(num, arr[0]), arr[1]);
    }
  }
});
</script>
