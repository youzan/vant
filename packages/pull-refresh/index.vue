<template>
  <div class="van-pull-refresh">
    <div
      class="van-pull-refresh__track"
      :style="style"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <div class="van-pull-refresh__head">
        <slot name="normal" v-if="status === 'normal'"/>
        <slot name="pulling" v-if="status === 'pulling'">
          <span class="van-pull-refresh__text">{{ pullingText || $t('pulling') }}</span>
        </slot>
        <slot name="loosing" v-if="status === 'loosing'">
          <span class="van-pull-refresh__text">{{ loosingText || $t('loosing') }}</span>
        </slot>
        <slot name="loading" v-if="status === 'loading'">
          <div class="van-pull-refresh__loading">
            <loading />
            <span>{{ loadingText || $t('loadingTip') }}</span>
          </div>
        </slot>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import scrollUtils from '../utils/scroll';

export default create({
  name: 'pull-refresh',

  props: {
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      status: 'normal',
      height: 0,
      duration: 0
    };
  },

  computed: {
    style() {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0,${this.height}px, 0)`
      };
    }
  },

  mounted() {
    this.scrollEl = scrollUtils.getScrollEventTarget(this.$el);
  },

  watch: {
    value(val) {
      this.duration = this.animationDuration;
      this.getStatus(val ? this.headHeight : 0, val);
    }
  },

  methods: {
    onTouchStart(event) {
      if (this.status === 'loading') {
        return;
      }
      if (this.getCeiling()) {
        this.duration = 0;
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
      }
    },

    onTouchMove(event) {
      if (this.status === 'loading') {
        return;
      }

      this.deltaY = event.touches[0].clientY - this.startY;
      this.direction = this.getDirection(event.touches[0]);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.getStatus(this.ease(this.deltaY));
          event.preventDefault();
        }
      }
    },

    onTouchEnd() {
      if (this.status === 'loading') {
        return;
      }

      if (this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;
        if (this.status === 'loosing') {
          this.getStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.getStatus(0);
        }
      }
    },

    getCeiling() {
      this.ceiling = scrollUtils.getScrollTop(this.scrollEl) === 0;
      return this.ceiling;
    },

    ease(height) {
      const { headHeight } = this;
      return height < headHeight
        ? height
        : height < headHeight * 2
          ? Math.round(headHeight + (height - headHeight) / 2)
          : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
    },

    getStatus(height, isLoading) {
      this.height = height;

      const status = isLoading
        ? 'loading' : height === 0
          ? 'normal' : height < this.headHeight
            ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    },

    getDirection(touch) {
      const distanceX = Math.abs(touch.clientX - this.startX);
      const distanceY = Math.abs(touch.clientY - this.startY);
      return distanceX > distanceY ? 'horizontal' : distanceX < distanceY ? 'vertical' : '';
    }
  }
});
</script>
