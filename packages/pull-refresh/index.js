import { use } from '../utils';
import Loading from '../loading';
import { TouchMixin } from '../mixins/touch';
import { getScrollTop, getScrollEventTarget } from '../utils/scroll';

const [sfc, bem, t] = use('pull-refresh');
const TEXT_STATUS = ['pulling', 'loosing', 'success'];

export default sfc({
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
      height: 0,
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
          event.cancelable && event.preventDefault();
        }
      }
    },

    onTouchEnd() {
      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;
        if (this.status === 'loosing') {
          this.setStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.setStatus(0);
        }
      }
    },

    getCeiling() {
      this.ceiling = getScrollTop(this.scrollEl) === 0;
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

    setStatus(height, isLoading) {
      this.height = height;

      const status = isLoading
        ? 'loading'
        : height === 0
          ? 'normal'
          : height < this.headHeight
            ? 'pulling'
            : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  },

  render(h) {
    const { status } = this;
    const text = this[`${status}Text`] || t(status);
    const style = {
      transition: `${this.duration}ms`,
      transform: `translate3d(0,${this.height}px, 0)`
    };

    const Status = this.slots(status) || [
      TEXT_STATUS.indexOf(status) !== -1 && <div class={bem('text')}>{text}</div>,
      status === 'loading' && (
        <div class={bem('loading')}>
          <Loading />
          <span>{text}</span>
        </div>
      )
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
