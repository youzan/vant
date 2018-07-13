<template>
  <div :class="b()">
    <div
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
    <div
      v-if="showIndicators && count > 1"
      :class="b('indicators', { vertical })"
    >
      <i
        v-for="index in count"
        :class="b('indicator', { active: index - 1 === activeIndicator })"
      />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import Touch from '../mixins/touch';
import { on, off } from '../utils/event';

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
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },

  mounted() {
    this.initialize();

    if (!this.$isServer) {
      on(window, 'resize', this.onResize, true);
    }
  },

  destroyed() {
    this.clear();

    if (!this.$isServer) {
      off(window, 'resize', this.onResize, true);
    }
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
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },

  computed: {
    count() {
      return this.swipes.length;
    },

    delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },

    size() {
      return this[this.vertical ? 'height' : 'width'];
    },

    trackSize() {
      return this.count * this.size;
    },

    activeIndicator() {
      return (this.active + this.count) % this.count;
    },

    trackStyle() {
      return {
        [this.vertical ? 'height' : 'width']: `${this.trackSize}px`,
        transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
        transform: `translate${this.vertical ? 'Y' : 'X'}(${this.offset}px)`
      };
    }
  },

  methods: {
    // initialize swipe position
    initialize(active = this.initialSwipe) {
      clearTimeout(this.timer);
      if (this.$el) {
        const rect = this.$el.getBoundingClientRect();
        this.width = rect.width;
        this.height = rect.height;
      }
      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(swipe => {
        swipe.offset = 0;
      });
      this.autoPlay();
    },

    onResize() {
      this.initialize(this.activeIndicator);
    },

    onTouchStart(event) {
      if (!this.touchable) return;

      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },

    onTouchMove(event) {
      if (!this.touchable) return;

      this.touchMove(event);

      if (
        (this.vertical && this.direction === 'vertical') ||
        this.direction === 'horizontal'
      ) {
        event.preventDefault();
        event.stopPropagation();
        this.move(0, Math.min(Math.max(this.delta, -this.size), this.size));
      }
    },

    onTouchEnd() {
      if (!this.touchable) return;

      if (this.delta) {
        const offset = this.vertical ? this.offsetY : this.offsetX;
        this.move(offset > 50 ? (this.delta > 0 ? -1 : 1) : 0);
        this.swiping = false;
      }

      this.autoPlay();
    },

    move(move = 0, offset = 0) {
      const { delta, active, count, swipes, trackSize } = this;
      const atFirst = active === 0;
      const atLast = active === count - 1;
      const outOfBounds = !this.loop && ((atFirst && (offset > 0 || move < 0)) || (atLast && (offset < 0 || move > 0)));

      if (outOfBounds || count <= 1) {
        return;
      }

      if (move && active + move >= -1 && active + move <= count) {
        if (active === -1) {
          swipes[count - 1].offset = 0;
        }
        swipes[0].offset = atLast && move > 0 ? trackSize : 0;

        this.active += move;
      }

      if (atFirst) {
        swipes[count - 1].offset = delta > 0 || move < 0 ? -trackSize : 0;
      } else if (atLast) {
        swipes[0].offset = delta < 0 || move > 0 ? trackSize : 0;
      }

      this.offset = offset - this.active * this.size;
    },

    swipeTo(index) {
      this.swiping = true;
      this.correctPosition();
      setTimeout(() => {
        this.swiping = false;
        this.move(index % this.count - this.active);
      }, 30);
    },

    correctPosition() {
      if (this.active <= -1) {
        this.move(this.count);
      }
      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },

    clear() {
      clearTimeout(this.timer);
    },

    autoPlay() {
      const { autoplay } = this;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(() => {
          this.swiping = true;
          this.correctPosition();

          setTimeout(() => {
            this.swiping = false;
            this.move(1);
            this.autoPlay();
          }, 30);
        }, autoplay);
      }
    }
  }
});
</script>
