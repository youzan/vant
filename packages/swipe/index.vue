<template>
  <div :class="b()">
    <div
      v-if="count > 1"
      :style="trackStyle"
      :class="b('track')"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      @transitionend="$emit('change', activeIndicator)"
    >
      <slot />
    </div>
    <div v-else :class="b('track')">
      <slot />
    </div>
    <div
      v-if="showIndicators && count > 1"
      :class="b(indicatorsClass)"
    >
      <i
        v-for="index in count"
        :key="index"
        :class="b('indicator', { active: index - 1 === activeIndicator })"
      />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import Touch from '../mixins/touch';

export default create({
  name: 'swipe',

  mixins: [Touch],

  props: {
    autoplay: Number,
    vertical: Boolean,
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
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
      height: 0,
      offset: 0,
      startX: 0,
      startY: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
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
      const sizeKey = this.vertical ? 'height' : 'width';

      const style = {
        [this.vertical ? 'paddingTop' : 'paddingLeft']: `${this[sizeKey]}px`,
        [sizeKey]: `${(this.count + 2) * this[sizeKey]}px`,
        transitionDuration: `${this.currentDuration}ms`
      };

      if (this.vertical) {
        style.transform = `translate(0, ${this.offset}px)`;
      } else {
        style.transform = `translate(${this.offset}px, 0)`;
      }

      return style;
    },

    indicatorsClass() {
      return this.vertical ? 'indicators--vertical' : 'indicators';
    },

    activeIndicator() {
      return (this.active + this.count) % this.count;
    },

    size() {
      return this.vertical ? this.height : this.width;
    }
  },

  methods: {
    initialize() {
      // reset offset when children changes
      clearTimeout(this.timer);
      ({ width: this.width, height: this.height } = this.$el.getBoundingClientRect());
      this.active = this.initialSwipe;
      this.currentDuration = 0;
      this.offset = this.count > 1 ? -this.size * (this.active + 1) : 0;
      this.swipes.forEach(swipe => {
        swipe.offset = 0;
      });
      this.autoPlay();
    },

    onTouchStart(event) {
      if (!this.touchable) return;

      clearTimeout(this.timer);

      this.currentDuration = 0;
      this.touchStart(event);

      if (this.active <= -1) {
        this.move(this.count);
      }
      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },

    onTouchMove(event) {
      if (!this.touchable) return;

      const delta = this.vertical ? this.deltaY : this.deltaX;

      this.touchMove(event);

      if (this.vertical && this.direction === 'vertical') {
        event.preventDefault();
        event.stopPropagation();
      } else if (this.direction === 'horizontal') {
        event.preventDefault();
        event.stopPropagation();
      }

      this.move(0, this.range(delta, [-this.size, this.size]));
      this.move(0, this.range(delta, [-this.size, this.size]));
    },

    onTouchEnd() {
      if (!this.touchable) return;

      const { deltaX, deltaY } = this;

      if (deltaX) {
        this.move(this.offsetX > 50 ? (deltaX > 0 ? -1 : 1) : 0);
        this.currentDuration = this.duration;
      }

      if (deltaY) {
        this.move(this.offsetY > 50 ? (deltaY > 0 ? -1 : 1) : 0);
        this.currentDuration = this.duration;
      }

      this.autoPlay();
    },

    move(move = 0, offset = 0) {
      const { active, count, swipes } = this;
      const delta = this.vertical ? this.deltaY : this.deltaX;

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
        swipes[0].offset = active === count - 1 && move > 0 ? count * this.size : 0;

        this.active += move;
      } else {
        if (active === 0) {
          swipes[count - 1].offset = delta > 0 ? -count * this.size : 0;
        } else if (active === count - 1) {
          swipes[0].offset = delta < 0 ? count * this.size : 0;
        }
      }
      this.offset = offset - (this.active + 1) * this.size;
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

    range(num, arr) {
      return Math.min(Math.max(num, arr[0]), arr[1]);
    }
  }
});
</script>
