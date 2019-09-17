import { createNamespace } from '../utils';
import { preventDefault } from '../utils/dom/event';
import { TouchMixin } from '../mixins/touch';
import { getScrollTop, getScrollEventTarget } from '../utils/dom/scroll';
import Loading from '../loading';

const [createComponent, bem, t] = createNamespace('pull-refresh');
const TEXT_STATUS = ['pulling', 'loosing', 'success'];

export default createComponent({
  mixins: [TouchMixin],

  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    successDuration: {
      type: Number,
      default: 500
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
      distance: 0,
      duration: 0
    };
  },

  computed: {
    untouchable() {
      return this.status === 'loading' || this.status === 'success' || this.disabled;
    }
  },

  watch: {
    value(loading) {
      this.duration = this.animationDuration;

      if (!loading && this.successText) {
        this.status = 'success';
        setTimeout(() => {
          this.setStatus(0);
        }, this.successDuration);
      } else {
        this.setStatus(loading ? this.headHeight : 0, loading);
      }
    }
  },

  mounted() {
    this.scrollEl = getScrollEventTarget(this.$el);
  },

  methods: {
    onTouchStart(event) {
      if (!this.untouchable && this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },

    onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.setStatus(this.ease(this.deltaY));
          preventDefault(event);
        }
      }
    },

    onTouchEnd() {
      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.setStatus(this.headHeight, true);
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

    getCeiling() {
      this.ceiling = getScrollTop(this.scrollEl) === 0;
      return this.ceiling;
    },

    ease(distance) {
      const { headHeight } = this;
      return Math.round(
        distance < headHeight
          ? distance
          : distance < headHeight * 2
            ? headHeight + (distance - headHeight) / 2
            : headHeight * 1.5 + (distance - headHeight * 2) / 4
      );
    },

    setStatus(distance, isLoading) {
      this.distance = distance;

      const status = isLoading
        ? 'loading'
        : distance === 0
          ? 'normal'
          : distance < this.headHeight
            ? 'pulling'
            : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  },

  render() {
    const { status, distance } = this;
    const text = this[`${status}Text`] || t(status);
    const style = {
      transitionDuration: `${this.duration}ms`,
      transform: this.distance ? `translate3d(0,${this.distance}px, 0)` : ''
    };

    const Status = this.slots(status, { distance }) || [
      TEXT_STATUS.indexOf(status) !== -1 && <div class={bem('text')}>{text}</div>,
      status === 'loading' && <Loading size="16">{text}</Loading>
    ];

    return (
      <div class={bem()}>
        <div
          class={bem('track')}
          style={style}
          onTouchstart={this.onTouchStart}
          onTouchmove={this.onTouchMove}
          onTouchend={this.onTouchEnd}
          onTouchcancel={this.onTouchEnd}
        >
          <div class={bem('head')}>{Status}</div>
          {this.slots()}
        </div>
      </div>
    );
  }
});
