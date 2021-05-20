// Utils
import { createNamespace } from '../utils';
import { preventDefault } from '../utils/dom/event';
import { getScrollTop, getScroller } from '../utils/dom/scroll';

// Mixins
import { TouchMixin } from '../mixins/touch';

// Components
import Loading from '../loading';

const [createComponent, bem, t] = createNamespace('pull-refresh');

const DEFAULT_HEAD_HEIGHT = 50;
const TEXT_STATUS = ['pulling', 'loosing', 'success'];

export default createComponent({
  mixins: [TouchMixin],

  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    pullDistance: [Number, String],
    value: {
      type: Boolean,
      required: true,
    },
    successDuration: {
      type: [Number, String],
      default: 500,
    },
    animationDuration: {
      type: [Number, String],
      default: 300,
    },
    headHeight: {
      type: [Number, String],
      default: DEFAULT_HEAD_HEIGHT,
    },
  },

  data() {
    return {
      status: 'normal',
      distance: 0,
      duration: 0,
    };
  },

  computed: {
    touchable() {
      return (
        this.status !== 'loading' && this.status !== 'success' && !this.disabled
      );
    },

    headStyle() {
      if (this.headHeight !== DEFAULT_HEAD_HEIGHT) {
        return {
          height: `${this.headHeight}px`,
        };
      }
    },
  },

  watch: {
    value(loading) {
      this.duration = this.animationDuration;

      if (loading) {
        this.setStatus(+this.headHeight, true);
      } else if (this.slots('success') || this.successText) {
        this.showSuccessTip();
      } else {
        this.setStatus(0, false);
      }
    },
  },

  mounted() {
    this.bindTouchEvent(this.$refs.track);
    this.scrollEl = getScroller(this.$el);
  },

  methods: {
    checkPullStart(event) {
      this.ceiling = getScrollTop(this.scrollEl) === 0;

      if (this.ceiling) {
        this.duration = 0;
        this.touchStart(event);
      }
    },

    onTouchStart(event) {
      if (this.touchable) {
        this.checkPullStart(event);
      }
    },

    onTouchMove(event) {
      if (!this.touchable) {
        return;
      }

      if (!this.ceiling) {
        this.checkPullStart(event);
      }

      this.touchMove(event);

      if (this.ceiling && this.deltaY >= 0 && this.direction === 'vertical') {
        preventDefault(event);
        this.setStatus(this.ease(this.deltaY));
      }
    },

    onTouchEnd() {
      if (this.touchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.setStatus(+this.headHeight, true);
          this.$emit('input', true);

          // ensure value change can be watched
          this.$nextTick(() => {
            this.$emit('refresh');
          });
        } else {
          this.setStatus(0);
        }
      }
    },

    ease(distance) {
      const pullDistance = +(this.pullDistance || this.headHeight);

      if (distance > pullDistance) {
        if (distance < pullDistance * 2) {
          distance = pullDistance + (distance - pullDistance) / 2;
        } else {
          distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4;
        }
      }

      return Math.round(distance);
    },

    setStatus(distance, isLoading) {
      let status;
      if (isLoading) {
        status = 'loading';
      } else if (distance === 0) {
        status = 'normal';
      } else {
        status =
          distance < (this.pullDistance || this.headHeight)
            ? 'pulling'
            : 'loosing';
      }

      this.distance = distance;

      if (status !== this.status) {
        this.status = status;
      }
    },

    genStatus() {
      const { status, distance } = this;
      const slot = this.slots(status, { distance });

      if (slot) {
        return slot;
      }

      const nodes = [];
      const text = this[`${status}Text`] || t(status);

      if (TEXT_STATUS.indexOf(status) !== -1) {
        nodes.push(<div class={bem('text')}>{text}</div>);
      }

      if (status === 'loading') {
        nodes.push(<Loading size="16">{text}</Loading>);
      }

      return nodes;
    },

    showSuccessTip() {
      this.status = 'success';

      setTimeout(() => {
        this.setStatus(0);
      }, this.successDuration);
    },
  },

  render() {
    const trackStyle = {
      transitionDuration: `${this.duration}ms`,
      transform: this.distance ? `translate3d(0,${this.distance}px, 0)` : '',
    };

    return (
      <div class={bem()}>
        <div ref="track" class={bem('track')} style={trackStyle}>
          <div class={bem('head')} style={this.headStyle}>
            {this.genStatus()}
          </div>
          {this.slots()}
        </div>
      </div>
    );
  },
});
