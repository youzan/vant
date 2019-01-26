import { use } from '../utils';
import Loading from '../loading';
import scrollUtils from '../utils/scroll';
import Touch from '../mixins/touch';

const [sfc, bem, t] = use('pull-refresh');

export default sfc({
  mixins: [Touch],

  props: {
    disabled: Boolean,
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
    untouchable() {
      return this.status === 'loading' || this.disabled;
    }
  },

  watch: {
    value(val) {
      this.duration = this.animationDuration;
      this.getStatus(val ? this.headHeight : 0, val);
    }
  },

  mounted() {
    this.scrollEl = scrollUtils.getScrollEventTarget(this.$el);
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
          this.getStatus(this.ease(this.deltaY));
          event.cancelable && event.preventDefault();
        }
      }
    },

    onTouchEnd() {
      if (!this.untouchable && this.ceiling && this.deltaY) {
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

    const Status = this.$slots[status] || [
      (status === 'pulling' || status === 'loosing') && <div class={bem('text')}>{text}</div>,
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
          {this.$slots.default}
        </div>
      </div>
    );
  }
});
