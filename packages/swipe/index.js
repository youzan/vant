import { use } from '../utils';
import { on, off } from '../utils/event';
import { TouchMixin } from '../mixins/touch';

const [sfc, bem] = use('swipe');

export default sfc({
  mixins: [TouchMixin],

  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    initialSwipe: Number,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
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
      computedWidth: 0,
      computedHeight: 0,
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

  activated() {
    if (this.rendered) {
      this.initialize();
    }

    this.rendered = true;
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
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },

    trackSize() {
      return this.count * this.size;
    },

    activeIndicator() {
      return (this.active + this.count) % this.count;
    },

    isCorrectDirection() {
      const expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },

    trackStyle() {
      const mainAxis = this.vertical ? 'height' : 'width';
      const crossAxis = this.vertical ? 'width' : 'height';
      return {
        [mainAxis]: `${this.trackSize}px`,
        [crossAxis]: this[crossAxis] ? `${this[crossAxis]}px` : '',
        transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
        transform: `translate${this.vertical ? 'Y' : 'X'}(${this.offset}px)`
      };
    },

    indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    }
  },

  methods: {
    // initialize swipe position
    initialize(active = this.initialSwipe) {
      clearTimeout(this.timer);
      if (this.$el) {
        const rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
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
      if (!this.touchable || !this.swiping) return;

      this.touchMove(event);

      if (this.isCorrectDirection) {
        event.preventDefault();
        event.stopPropagation();
        this.move({ offset: Math.min(Math.max(this.delta, -this.size), this.size) });
      }
    },

    onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        const offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({
          pace: offset > 0 ? (this.delta > 0 ? -1 : 1) : 0,
          emitChange: true
        });
      }

      this.swiping = false;
      this.autoPlay();
    },

    move({ pace = 0, offset = 0, emitChange }) {
      const { delta, active, count, swipes, trackSize } = this;
      const atFirst = active === 0;
      const atLast = active === count - 1;
      const outOfBounds =
        !this.loop &&
        ((atFirst && (offset > 0 || pace < 0)) || (atLast && (offset < 0 || pace > 0)));

      if (outOfBounds || count <= 1) {
        return;
      }

      if (swipes[0]) {
        swipes[0].offset = atLast && (delta < 0 || pace > 0) ? trackSize : 0;
      }

      if (swipes[count - 1]) {
        swipes[count - 1].offset = atFirst && (delta > 0 || pace < 0) ? -trackSize : 0;
      }

      if (pace && active + pace >= -1 && active + pace <= count) {
        this.active += pace;

        if (emitChange) {
          this.$emit('change', this.activeIndicator);
        }
      }

      this.offset = Math.round(offset - this.active * this.size);
    },

    swipeTo(index) {
      this.swiping = true;
      this.resetTouchStatus();
      this.correctPosition();
      setTimeout(() => {
        this.swiping = false;
        this.move({
          pace: (index % this.count) - this.active,
          emitChange: true
        });
      }, 30);
    },

    correctPosition() {
      if (this.active <= -1) {
        this.move({ pace: this.count });
      }
      if (this.active >= this.count) {
        this.move({ pace: -this.count });
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
          this.resetTouchStatus();
          this.correctPosition();

          setTimeout(() => {
            this.swiping = false;
            this.move({
              pace: 1,
              emitChange: true
            });
            this.autoPlay();
          }, 30);
        }, autoplay);
      }
    }
  },

  render(h) {
    const { count, activeIndicator } = this;

    const Indicator =
      this.slots('indicator') ||
      (this.showIndicators && count > 1 && (
        <div class={bem('indicators', { vertical: this.vertical })}>
          {Array(...Array(count)).map((empty, index) => (
            <i
              class={bem('indicator', { active: index === activeIndicator })}
              style={index === activeIndicator ? this.indicatorStyle : null}
            />
          ))}
        </div>
      ));

    return (
      <div class={bem()}>
        <div
          ref="track"
          style={this.trackStyle}
          class={bem('track')}
          onTouchstart={this.onTouchStart}
          onTouchmove={this.onTouchMove}
          onTouchend={this.onTouchEnd}
          onTouchcancel={this.onTouchEnd}
        >
          {this.slots()}
        </div>
        {Indicator}
      </div>
    );
  }
});
