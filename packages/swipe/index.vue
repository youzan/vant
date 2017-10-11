<template>
  <div class="van-swipe">
    <div 
      :style="trackStyle"
      class="van-swipe__track"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      @transitionend="onChange"
    >
      <slot></slot>
    </div>
    <div class="van-swipe__indicators" v-if="showIndicators && count > 1">
      <i v-for="index in count" :class="{ 'van-swipe__indicator--active': index - 1 === activePoint }" />
    </div>
</div>
</template>

<script>
export default {
  name: 'van-swipe',

  props: {
    autoplay: Number,
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
      offset: 0,
      startX: 0,
      startY: 0,
      active: 0,
      deltaX: 0,
      swipes: [],
      childrenOffset: [],
      direction: '',
      currentDuration: 0,
      width: window.innerWidth
    };
  },

  mounted() {
    this.move(0);
    this.autoPlay();
  },

  computed: {
    count() {
      return this.swipes.length;
    },

    trackStyle() {
      return this.count === 1 ? {} : {
        paddingLeft: this.width + 'px',
        width: (this.count + 2) * this.width + 'px',
        transitionDuration: `${this.currentDuration}ms`,
        transform: `translate3d(${this.offset}px, 0, 0)`
      };
    },

    activePoint() {
      return (this.active + this.count) % this.count;
    }
  },

  methods: {
    onTouchStart(event) {
      clearTimeout(this.timer);

      this.deltaX = 0;
      this.direction = '';
      this.currentDuration = 0;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;

      console.log('active：', this.active);

      // todo two slide
      if (this.active === -1) {
        this.move(this.count);
        this.swipes[this.count - 1].offset = 0;
        this.swipes[0].offset = this.count * this.width;
      }
      if (this.active === this.count) {
        this.swipes[0].offset = 0;
        this.swipes[this.count - 1].offset = -this.count * this.width;
        this.move(-this.count);
      }
      if (this.active === this.count - 2) {
        this.swipes[this.count - 1].offset = 0;
      }
      if (this.active === this.count - 1) {
        this.swipes[0].offset = this.count * this.width;
      }
      if (this.active === 0) {
        this.swipes[this.count - 1].offset = -this.count * this.width;
      }
      if (this.active === 1) {
        this.swipes[0].offset = 0;
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
      let { active } = this;
      if (move) {
        active += move;
        this.active = active;
        this.$emit('input', this.activePoint);
      }
      this.offset = offset - (active + 1) * this.width;
    },

    autoPlay() {
      const { autoplay } = this;
      if (autoplay && this.count > 1) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.currentDuration = 0;

          if (this.active === this.count) {
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
      const distanceX = Math.abs(touch.clientX - this.startX);
      const distanceY = Math.abs(touch.clientY - this.startY);
      return distanceX > distanceY ? 'horizontal' : distanceX < distanceY ? 'vertical' : '';
    },

    range(num, arr) {
      return Math.min(Math.max(num, arr[0]), arr[1]);
    },

    onChange() {
      this.$emit('change', this.activePoint);
    }
  }
};
</script>
